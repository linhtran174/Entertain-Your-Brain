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
    public sealed partial class SurvivalTechniquesDetail : Page
    {
        private NavigationHelper _navigationHelper;

        public SurvivalTechniquesViewModel SurvivalTechniquesModel { get; private set; }

        public SurvivalTechniquesDetail()
        {
            this.InitializeComponent();
            _navigationHelper = new NavigationHelper(this);
            ytViewer.NavigationHelper = _navigationHelper;

            SurvivalTechniquesModel = new SurvivalTechniquesViewModel();

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

            await SurvivalTechniquesModel.LoadItemsAsync();
            SurvivalTechniquesModel.SelectItem(e.Parameter);

            if (SurvivalTechniquesModel != null)
            {
                SurvivalTechniquesModel.ViewType = ViewTypes.Detail;
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
