import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

const file_not_found = 'ENOENT';
const host_not_found = 'ENOTFOUND';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  /**************************************************************************** */
  app.get("/filteredimage", async (req: Request, res: Response) => {
    const image_url = req.query.image_url;  
    if(!image_url) {
      return res.status(400).send("An image url is required");
    }

    try {
      const image_path = await filterImageFromURL(image_url);

      console.log("Storing filtered image at " + image_path);

      res.status(200).sendFile(image_path, () => {
        console.log("Deleting image stored at " + image_path);
        deleteLocalFiles([image_path]);
      });
    } catch (error) {      
      const casted_error = error as Error;
      console.log("There was an error when fulfilling the request. " + error);
      
      if(casted_error.code === file_not_found) {
        return res.status(404).send("The file does not exist [" + image_url + "]");
      } else if(casted_error.code === host_not_found) {
        return res.status(400).send("The host does not exist. Did you properly write it?");
      } else {
        return res.status(500).send("There was an error fulfilling your request. " + error);
      }
    }
  });

  //! END @TODO1
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();

class Error {
  code: string
}