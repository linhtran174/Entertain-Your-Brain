using System;
using System.Threading.Tasks;
using System.Windows.Input;
using System.Net.NetworkInformation;

using Windows.UI.Xaml;

using AppStudio.Services;
using AppStudio.Data;

namespace AppStudio.ViewModels
{
    public class MainViewModel : BindableBase
    {
       private LetsPlayViewModel _letsPlayModel;
       private NatureBeautyViewModel _natureBeautyModel;
       private ScienceIsFunViewModel _scienceIsFunModel;
       private GagViewModel _gagModel;
       private RelaxingMusicsViewModel _relaxingMusicsModel;
       private JokesViewModel _jokesModel;
        private PrivacyViewModel _privacyModel;

        private ViewModelBase _selectedItem = null;

        public MainViewModel()
        {
            _selectedItem = LetsPlayModel;
            _privacyModel = new PrivacyViewModel();

        }
 
        public LetsPlayViewModel LetsPlayModel
        {
            get { return _letsPlayModel ?? (_letsPlayModel = new LetsPlayViewModel()); }
        }
 
        public NatureBeautyViewModel NatureBeautyModel
        {
            get { return _natureBeautyModel ?? (_natureBeautyModel = new NatureBeautyViewModel()); }
        }
 
        public ScienceIsFunViewModel ScienceIsFunModel
        {
            get { return _scienceIsFunModel ?? (_scienceIsFunModel = new ScienceIsFunViewModel()); }
        }
 
        public GagViewModel GagModel
        {
            get { return _gagModel ?? (_gagModel = new GagViewModel()); }
        }
 
        public RelaxingMusicsViewModel RelaxingMusicsModel
        {
            get { return _relaxingMusicsModel ?? (_relaxingMusicsModel = new RelaxingMusicsViewModel()); }
        }
 
        public JokesViewModel JokesModel
        {
            get { return _jokesModel ?? (_jokesModel = new JokesViewModel()); }
        }

        public void SetViewType(ViewTypes viewType)
        {
            LetsPlayModel.ViewType = viewType;
            NatureBeautyModel.ViewType = viewType;
            ScienceIsFunModel.ViewType = viewType;
            GagModel.ViewType = viewType;
            RelaxingMusicsModel.ViewType = viewType;
            JokesModel.ViewType = viewType;
        }

        public ViewModelBase SelectedItem
        {
            get { return _selectedItem; }
            set
            {
                SetProperty(ref _selectedItem, value);
                UpdateAppBar();
            }
        }

        public Visibility AppBarVisibility
        {
            get
            {
                return SelectedItem == null ? AboutVisibility : SelectedItem.AppBarVisibility;
            }
        }

        public Visibility AboutVisibility
        {

         get { return Visibility.Visible; }
        }

        public void UpdateAppBar()
        {
            OnPropertyChanged("AppBarVisibility");
            OnPropertyChanged("AboutVisibility");
        }

        /// <summary>
        /// Load ViewModel items asynchronous
        /// </summary>
        public async Task LoadDataAsync(bool forceRefresh = false)
        {
            var loadTasks = new Task[]
            { 
                LetsPlayModel.LoadItemsAsync(forceRefresh),
                NatureBeautyModel.LoadItemsAsync(forceRefresh),
                ScienceIsFunModel.LoadItemsAsync(forceRefresh),
                GagModel.LoadItemsAsync(forceRefresh),
                RelaxingMusicsModel.LoadItemsAsync(forceRefresh),
                JokesModel.LoadItemsAsync(forceRefresh),
            };
            await Task.WhenAll(loadTasks);
        }

        //
        //  ViewModel command implementation
        //
        public ICommand RefreshCommand
        {
            get
            {
                return new DelegateCommand(async () =>
                {
                    await LoadDataAsync(true);
                });
            }
        }

        public ICommand AboutCommand
        {
            get
            {
                return new DelegateCommand(() =>
                {
                    NavigationServices.NavigateToPage("AboutThisAppPage");
                });
            }
        }

        public ICommand PrivacyCommand
        {
            get
            {
                return new DelegateCommand(() =>
                {
                    NavigationServices.NavigateTo(_privacyModel.Url);
                });
            }
        }
    }
}
