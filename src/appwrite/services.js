import { Client, Databases, ID,Query,Storage } from "appwrite";
//import { appwriteUrl, projectId, databaseId, collectionId, bucketId } from "../conf/conf";


class Services {
    client;
    databases;
    storage;
    databaseId;
    collectionId;
    bucketId;

    constructor() {
        console.log("services constructor");
        this.client = new Client()
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject('65a50c7e24aa639deb8f');

        this.databases = new Databases(this.client);
        this.storage=new Storage(this.client);
        this.databaseId="65a50e8b2f600e403335";
        this.collectionId="65a50e992c56864a1597";
        this.bucketId="65a510974518cce69e1d";
    }

    // To Add blogs ..................................................................
    async addBlog({ title, content, featuredImage, status, userId }) {
console.log( title, content, featuredImage, status, userId);
        try{
           return this.databases.createDocument(
                this.databaseId,
                this.collectionId,
                ID.unique(),
                { title, content, featuredImage, status, userId }
            );
        }catch(error){
            console.log("error occured while creating blog ",error);
        }

    }

    //To update an blog....................................................................
   async updateBlog({ id, title, content, featuredImage, status, userId }) {

    try{
        return await this.databases.updateDocument(this.databaseId, this.collectionId, id, {title, content, featuredImage, status, userId });
    }catch(error){
        console.log("error occured while updating document ",error);
    }

        // promise = databases.updateDocument(databaseId, collectionId, id, { id, title, content, featuredImage, status, userId });

        // promise.then(function (response) {
        //     console.log(response); // Success
        // }, function (error) {
        //     console.log(error); // Failure
        // });
    }

    //To get all blogs........................................................................
    getAllBlogs() {
        
        return this.databases.listDocuments(this.databaseId, this.collectionId,[Query.equal("status","active")]);


    }


    //To get a particular...........................................................................
    async getBlog(id){
        try{
            return this.databases.getDocument(this.databaseId,this.collectionId, id);
        }catch(error){
            console.log("fetching document error ",error);
            return false;
        }
    }

    //To delete a blog................................................................................
    async deleteBlog(id){
        try{
            return await databases.deleteDocument(databaseId, collectionId, id);
        }catch(error){
            console.log("error while deleting a document ",error);
        }
    }

    //To upload a file ................................................................................
    async uploadImage(file){
        try{
            return this.storage.createFile(this.bucketId, ID.unique(), file);
        }catch(error){
            console.log("uploading image error ",error);
            return false;
        }
    }

    // To delete a file ..................................................................................
   async deleteImage(id){
        try{
            return await storage.deleteFile(this.bucketId, id);
        }catch(error){
            console.log("error while deleting file in appwrite ",error);
        }
    }

    //To get a file preview..............................................................................
    getImagePreview(id){
        try{
            return this.storage.getFilePreview(this.bucketId, id);
        }catch(error){
            console.log("error while previewing image ",error);
            return false;
        }
    }
}

export default Services;