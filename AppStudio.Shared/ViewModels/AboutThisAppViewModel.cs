using System;

using Windows.ApplicationModel;

namespace AppStudio.ViewModels
{
    public class AboutThisAppViewModel
    {
        public string Publisher
        {
            get
            {
                return "ICT Sense";
            }
        }

        public string AppVersion
        {
            get
            {
                return string.Format("{0}.{1}.{2}.{3}", Package.Current.Id.Version.Major, Package.Current.Id.Version.Minor, Package.Current.Id.Version.Build, Package.Current.Id.Version.Revision);
            }
        }

        public string AboutText
        {
            get
            {
                return "Refresh your brain with all kinds of cool stuffs...";
            }
        }
    }
}

