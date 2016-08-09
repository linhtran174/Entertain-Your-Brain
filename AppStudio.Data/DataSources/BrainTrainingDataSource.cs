using System;
using System.Windows;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AppStudio.Data
{
    public class BrainTrainingDataSource : DataSourceBase<TouchDevelopSchema>
    {
        private const string LocalDataSource = "/Assets/Data/BrainTrainingDataSource.json";
        private const string ScriptId = "avbl";

        protected override string CacheKey
        {
            get { return "BrainTrainingDataSource"; }
        }

        public override bool HasStaticData
        {
            get { return false; }
        }

        public async override Task<IEnumerable<TouchDevelopSchema>> LoadDataAsync()
        {
            try
            {
                var serviceDataProvider = new TouchDevelopDataProvider(LocalDataSource, ScriptId);
                return await serviceDataProvider.Load();
            }
            catch (Exception ex)
            {
                AppLogs.WriteError("BrainTrainingDataSourceDataSource.LoadData", ex.ToString());
                return new TouchDevelopSchema[0];
            }
        }
    }
}
