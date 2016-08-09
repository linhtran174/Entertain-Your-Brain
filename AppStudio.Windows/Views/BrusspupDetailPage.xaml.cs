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
    public sealed partial class BrusspupDetail : Page
    {
        private NavigationHelper _navigationHelper;

        public BrusspupViewModel BrusspupModel { get; private set; }

        public BrusspupDetail()
        {
            this.InitializeComponent();
            _navigationHelper = new NavigationHelper(this);
            ytViewer.NavigationHelper = _navigationHelper;

            BrusspupModel = new BrusspupViewModel();

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

            await BrusspupModel.LoadItemsAsync();
            BrusspupModel.SelectItem(e.Parameter);

            if (BrusspupModel != null)
            {
                BrusspupModel.ViewType = ViewTypes.Detail;
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
