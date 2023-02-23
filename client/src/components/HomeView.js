import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; //this is a the css file used in react bootstrap libraries
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
} from "react-bootstrap";
import "./HomeView.css";

const CLIENT_ID = "00858dd1207649a1be2b9016330f67a1";
const CLIENT_SECRET = "89eb44180a6d48f7bb32b43eff007638";

export default function HomeView() {
  let [searchInput, setSearchInput] = useState("");
  let [accessToken, setAccessToken] = useState("");
  let [albums, setAlbums] = useState([]);

  //USEFFECT TO GET ACCESS TOKEN
  useEffect(() => {
    let authParameters = {
      //this is to fetch our access token
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };
    //API FETCH ACCESS TOKEN
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token)); //if you put it in a console.log instead of a state you will be getting the access token in the console
  }, []);

  //USEEFFECT TO GET ALBUMS///everything stops working when i biring this back???
  useEffect(() => {
    let searchParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };
    //in the fetch url to start adding variables you put a ? then put the first variable
    //we use the & to say what the next varibale is

    //get request using search to get the Artist ID
    // let artistId = fetch(
    //   "https://api.spotify.com/v1/search?q=" +
    //     "taylor%20swift" +
    //     "&type=artist", //if i put &type=album,track then i get the albums name and name of tracks on it
    //   searchParameters
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     return data.artists.items[0].id;
    //   }); //so here we are saving the id in a variable called artistId
    // console.log("the artist id is" + artistId);
    //get request with Artist ID and grab all the albums of that artist

    let artistId = fetch(
      "https://api.spotify.com/v1/search?q=" + "elton%20john" + "&type=album", //if i put &type=album,track then i get the albums name and name of tracks on it
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        setAlbums(data.albums.items);
      });
  }, []);
  ///////////////////////////////////////////////////////////////////
  //WAS USING THIS IN THE USEEFFECT TO SHOW ALBUMS BUT CHANGED TO USING NAME INSTEED OF ARTIST ID
  //   let returnedAlbums = fetch(
  //     "https://api.spotify.com/v1/artists/" +
  //       "06HL4z0CvFAxyc27GXpf02" +
  //       "/albums" +
  //       "?include_groups=album&market=US&limit=50",
  //     searchParameters
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setAlbums(data.items);
  //     });
  // }, []);
  /////////////////////////////////////////////////////////////////////////
  //SEARCH FOR ALBUMS FUNCTION
  async function search() {
    // console.log(`Search for ${searchInput}`);
    let searchParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };
    //in the fetch url to start adding variables you put a ? then put the first variable
    //we use the & to say what the next varibale is

    //get request using search to get the Artist ID
    let artistId = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=album", //if i put &type=album,track then i get the albums name and name of tracks on it
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        setAlbums(data.albums.items);
      }); //so here we are saving the id in a variable called artistId
    // console.log("the artist id is " + artistId);
    //get request with Artist ID and grab all the albums of that artist

    // let returnedAlbums = await fetch(
    //   "https://api.spotify.com/v1/artists/" +
    //     artistId +
    //     "/albums" +
    //     "?include_groups=album&market=US&limit=50",
    //   searchParameters
    // )
    //   //display those albums to the user
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // console.log(data);//i see info of all albums
    //     setAlbums(data.items);
    //   });
  }

  //GET TRACKS OF ALBUM FUNCTION
  const getTracks = async (albumId) => {
    let searchParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    await fetch(
      "https:api.spotify.com/v1/albums/" + albumId + "/tracks", //if i put &type=album,track then i get the albums name and name of tracks on it
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        return data.items;
      });

    //so here we are saving the id in a variable called artistId
    // console.log("the artist id is:" + artistId);
    //get request with Artist ID and grab all the albums of that artist
  };

  //HANDLE INPUT FIELD CHANGES
  function handleChange(event) {
    setSearchInput(event.target.value);
    //if i put console.log(searchInput) here, it will look weird and lag one letter behind, that doesnt mean it isnt working
    //i just should put the console.log (searchInput) in line 44
  }
  //HANDLING BUTTON WHEN TAPPED ON ENTER
  function handleKeyPress(event) {
    if (event.key == "Enter") {
      // console.log("Pressed Enter");
      // console.log(searchInput);
      search();
    }
  }
  // console.log(albums);
  // i am console.logging the albums outside the function
  //so i can see if i am getting the data to be able to use it in the DOM
  return (
    <div>
      <Container>
        <InputGroup className="mb-3 mt-5" size="lg">
          <FormControl
            placeholder="Search for Artist"
            type="input"
            onKeyPress={(e) => handleKeyPress(e)}
            onChange={(e) => handleChange(e)}
          />
          <Button onClick={search}>Search</Button>
        </InputGroup>
      </Container>
      <Container>
        <Row className="row row-cols-4 mt-5">
          {/* mx-2 gives a margin */}
          {albums.map((album, index) => {
            console.log(album);
            return (
              <Card key={index} className="p-3 mb-4 cards">
                <Link to={`/album/${album.id}`}>
                  <Card.Img
                    src={album.images[1].url}
                    className="card-image"
                    onClick={(e) => getTracks(album.id)} //getting tracks
                  />
                </Link>
                <Card.Title className="mt-2">{album.name}</Card.Title>
                <Card.Text>Release Date: {album.release_date}</Card.Text>
                <Button variant="warning">
                  {/* See All {album.total_tracks} tracks */}
                  <a href={album.external_urls.spotify} target="_blank">
                    Listen To Tracks
                  </a>
                </Button>
              </Card>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

//rfc tab scaffolds the whole thing here :)
