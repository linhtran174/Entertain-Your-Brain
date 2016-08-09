using AppStudio.Services;
using AppStudio.ViewModels;

using Windows.ApplicationModel.DataTransfer;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Navigation;

namespace AppStudio.Views
{
    public sealed partial class AllTimeFavoritesDetail : Page
    {
        private NavigationHelper _navigationHelper;

        private DataTransferManager _dataTransferManager;

        public AllTimeFavoritesDetail()
        {
            this.InitializeComponent();
            _navigationHelper = new NavigationHelper(this);

            AllTimeFavoritesModel = new AllTimeFavoritesViewModel();
        }

        public AllTimeFavoritesViewModel AllTimeFavoritesModel { get; private set; }

        public NavigationHelper NavigationHelper
        {
            get { return _navigationHelper; }
        }

        protected override async void OnNavigatedTo(NavigationEventArgs e)
        {
            _dataTransferManager = DataTransferManager.GetForCurrentView();
            _dataTransferManager.DataRequested += OnDataRequested;

            _navigationHelper.OnNavigatedTo(e);

            if (AllTimeFavoritesModel != null)
            {
                await AllTimeFavoritesModel.LoadItemsAsync();
                AllTimeFavoritesModel.SelectItem(e.Parameter);

                AllTimeFavoritesModel.ViewType = ViewTypes.Detail;
            }
            DataContext = this;
        }

        protected override void OnNavigatedFrom(NavigationEventArgs e)
        {
            _navigationHelper.OnNavigatedFrom(e);
            _dataTransferManager.DataRequested -= OnDataRequested;
        }

        private void OnDataRequested(DataTransferManager sender, DataRequestedEventArgs args)
        {
            if (AllTimeFavoritesModel != null)
            {
                AllTimeFavoritesModel.GetShareContent(args.Request);
            }
        }
    }
}
