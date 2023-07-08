﻿using NETworkManager.Models.IPApi;
using NETworkManager.Settings;
using NETworkManager.Utilities;
using System.ComponentModel;
using System.Diagnostics;
using System.Net.NetworkInformation;
using System.Threading.Tasks;
using System.Windows.Input;

namespace NETworkManager.ViewModels;

public class IPApiIPGeolocationViewModel : ViewModelBase
{
    #region  Variables 
    private bool _isChecking;
    public bool IsChecking
    {
        get => _isChecking;
        set
        {
            if (value == _isChecking)
                return;

            _isChecking = value;
            OnPropertyChanged();
        }
    }

    private IPGeolocationResult _result;
    public IPGeolocationResult Result
    {
        get => _result;
        set
        {
            if (value == _result)
                return;

            _result = value;
            OnPropertyChanged();
        }
    }

    public bool CheckIPGeoApiEnabled => SettingsManager.Current.Dashboard_CheckIPApiIPGeolocationEnabled;
    #endregion

    #region Constructor, load settings
    public IPApiIPGeolocationViewModel()
    {
        // Detect if network address or status changed...
        NetworkChange.NetworkAvailabilityChanged += (sender, args) => Check();
        NetworkChange.NetworkAddressChanged += (sender, args) => Check();

        LoadSettings();

        // Detect if settings have changed...
        SettingsManager.Current.PropertyChanged += SettingsManager_PropertyChanged;
    }

    private void LoadSettings()
    {

    }
    #endregion

    #region ICommands & Actions
    public ICommand CheckViaHotkeyCommand => new RelayCommand(p => CheckViaHotkeyAction());

    private void CheckViaHotkeyAction()
    {
        Check();
    }
    #endregion

    #region Methods
    public void Check()
    {
        CheckAsync().ConfigureAwait(false);
    }

    private async Task CheckAsync()
    {
        // Check is disabled via settings
        if (!CheckIPGeoApiEnabled)
            return;

        // Don't check multiple times if already running
        if (IsChecking)
            return;

        IsChecking = true;
        Result = null;

        // Make the user happy, let him see a reload animation (and he cannot spam the reload command)        
        await Task.Delay(2000);

        Result = await IPGeolocationService.GetInstance().GetIPGeolocationAsync();

        IsChecking = false;
    }
    #endregion

    #region Events
    private void SettingsManager_PropertyChanged(object sender, PropertyChangedEventArgs e)
    {
        switch (e.PropertyName)
        {
            case nameof(SettingsInfo.Dashboard_CheckIPApiIPGeolocationEnabled):
                OnPropertyChanged(nameof(CheckIPGeoApiEnabled));

                // Check if enabled via settings
                if (CheckIPGeoApiEnabled)
                    Check();

                break;
        }
    }
    #endregion
}