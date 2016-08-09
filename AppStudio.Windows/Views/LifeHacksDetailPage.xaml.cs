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
    public sealed partial class LifeHacksDetail : Page
    {
        private NavigationHelper _navigationHelper;

        public LifeHacksViewModel LifeHacksModel { get; private set; }

        public LifeHacksDetail()
        {
            this.InitializeComponent();
            _navigationHelper = new NavigationHelper(this);
            ytViewer.NavigationHelper = _navigationHelper;

            LifeHacksModel = new LifeHacksViewModel();

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

            await LifeHacksModel.LoadItemsAsync();
            LifeHacksModel.SelectItem(e.Parameter);

            if (LifeHacksModel != null)
            {
                LifeHacksModel.ViewType = ViewTypes.Detail;
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
