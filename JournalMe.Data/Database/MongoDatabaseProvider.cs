using System;
using MongoDB.Driver;

namespace JournalMe.Data.Database
{
    public static class MongoDatabaseProvider
    {
        public static IMongoDatabase GetMongoDatabase(){
            var mongoClient = new MongoClient("mongodb://will:test123@ds016118.mlab.com:16118");
            return mongoClient.GetDatabase("JournalMe");
        }
    }
}
