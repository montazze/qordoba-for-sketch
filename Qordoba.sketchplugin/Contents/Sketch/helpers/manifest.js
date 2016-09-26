var manifest = {
    getManifestFilePath: function(context){
        var scriptFullPath = context.scriptPath
        var directoryPlugin = [scriptFullPath stringByDeletingLastPathComponent]
        var manifestFile = directoryPlugin + "/manifest.json"

        return manifestFile
    },

    readManifestFile: function(context){
        var filePath = manifest.getManifestFilePath(context)
        var fileManager = [NSFileManager defaultManager]
        if([fileManager fileExistsAtPath:filePath]) {
            var fetchData = [NSData dataWithContentsOfFile:filePath]  
            if(fetchData){
                var error;
                var res = [NSJSONSerialization JSONObjectWithData:fetchData options:NSJSONReadingMutableLeaves error:error]
                
                if(error == nil && res != nil){
                    return res
                } else {
                    NSLog("error " + error);
                    return false
                }
                
            } 
            NSLog("Could not get manifest file data");
            return false
        }
        return false
    },

    getPluginVersion: function(context){
        var json = manifest.readManifestFile(context);

        if(json){
            var version = json.version.toString()
            return version
        }

        NSLog("Could not get version number");
        return false
    }
}