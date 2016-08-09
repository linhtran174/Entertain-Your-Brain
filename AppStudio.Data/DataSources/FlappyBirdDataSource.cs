using System;
using System.Windows;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AppStudio.Data
{
    public class FlappyBirdDataSource : DataSourceBase<TouchDevelopSchema>
    {
        private const string LocalDataSource = "/Assets/Data/FlappyBirdDataSource.json";
        private const string ScriptId = "rivma";

        protected override string CacheKey
        {
            get { return "FlappyBirdDataSource"; }
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
                AppLogs.WriteError("FlappyBirdDataSourceDataSource.LoadData", ex.ToString());
                return new TouchDevelopSchema[0];
            }
        }
    }
}
