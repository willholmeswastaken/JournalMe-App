using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace JournalMe.Data.Models
{
    public class Journal
    {
        public Journal()
        {
        }

        [BsonId]
        public ObjectId Id
        {
            get;
            set;
        }

        [BsonElement]
        public string Title
        {
            get;
            set;
        }

        [BsonElement]
        public string Content
        {
            get;
            set;
        }

        [BsonElement]
        public DateTime DateLogged
        {
            get;
            set;
        }

        [BsonElement]
        public string LoggedByUserId
        {
            get;
            set;
        }
    }
}
