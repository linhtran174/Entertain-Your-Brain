using AppStudio.Services;
using AppStudio.ViewModels;

using Windows.ApplicationModel.DataTransfer;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Navigation;

namespace AppStudio.Views
{
    public sealed partial class NatureBeautyDetail : Page
    {
        private NavigationHelper _navigationHelper;

        private DataTransferManager _dataTransferManager;

        public NatureBeautyDetail()
        {
            this.InitializeComponent();
            _navigationHelper = new NavigationHelper(this);

            NatureBeautyModel = new NatureBeautyViewModel();
        }

        public NatureBeautyViewModel NatureBeautyModel { get; private set; }

        public NavigationHelper NavigationHelper
        {
            get { return _navigationHelper; }
        }

        protected override async void OnNavigatedTo(NavigationEventArgs e)
        {
            _dataTransferManager = DataTransferManager.GetForCurrentView();
            _dataTransferManager.DataRequested += OnDataRequested;

            _navigationHelper.OnNavigatedTo(e);

            if (NatureBeautyModel != null)
            {
                await NatureBeautyModel.LoadItemsAsync();
                NatureBeautyModel.SelectItem(e.Parameter);

                NatureBeautyModel.ViewType = ViewTypes.Detail;
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
            if (NatureBeautyModel != null)
            {
                NatureBeautyModel.GetShareContent(args.Request);
            }
        }
    }
}
