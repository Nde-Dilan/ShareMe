import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "tdq61be3",
  dataset: "production",
  apiVersion: "2023-10-17",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

export async function getUser(userImageId, username) {
    try {
        let result;
        const user = await client.fetch(`*[_type == "user" && userName == "${username}"]`);
        result = await user[0];
        console.log("------------------<result>------------");
        // alert(result);
        return result
    
      } catch (error) {
        console.error(error);
        return "No result found"+error;
        // Handle the error (log it, return a default value, etc.)
      }
}
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
