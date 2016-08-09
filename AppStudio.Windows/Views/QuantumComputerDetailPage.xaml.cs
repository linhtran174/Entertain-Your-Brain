using System;
using System.Net.NetworkInformation;
using System.ComponentModel;

using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Navigation;
using Windows.ApplicationModel.DataTransfer;

using AppStudio.Services;
using AppStudio.ViewModels;

namespace AppStudio.Views
{
    public sealed partial class QuantumComputerDetail : Page
    {
        private NavigationHelper _navigationHelper;

        public QuantumComputerViewModel QuantumComputerModel { get; private set; }

        public QuantumComputerDetail()
        {
            this.InitializeComponent();
            _navigationHelper = new NavigationHelper(this);
            ytViewer.NavigationHelper = _navigationHelper;

            QuantumComputerModel = new QuantumComputerViewModel();

            DataContext = this;
        }

        public NavigationHelper NavigationHelper
        {
            get { return _navigationHelper; }
        }

        public event PropertyChangedEventHandler PropertyChanged;

        protected async override void OnNavigatedTo(NavigationEventArgs e)
        {
            _navigationHelper.OnNavigatedTo(e);

            await QuantumComputerModel.LoadItemsAsync();
            QuantumComputerModel.SelectItem(e.Parameter);

            if (QuantumComputerModel != null)
            {
                QuantumComputerModel.ViewType = ViewTypes.Detail;
            }
        }

        protected override void OnNavigatedFrom(NavigationEventArgs e)
        {
            _navigationHelper.OnNavigatedFrom(e);
            ytViewer.EmbedUrl = null;
        }

        private void OnPropertyChanged(string propertyName)
        {
            if (this.PropertyChanged != null)
            {
                this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
            }
        }
    }
}
