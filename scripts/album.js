var albumPicasso = {
    title: 'The Colors',
    artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
};

//Another Example Album
 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };

//My Example Album
 var albumSylvia = {
     title: 'Where am I',
     artist: 'Sylvia Sievers',
     label: 'SJS',
     year: '1970',
     albumArtUrl: 'assets/images/album_covers/DOBBY.JPG',
     songs: [
         { title: 'Little Puppy', duration: '3:01' },
         { title: 'Cat got your tongue?', duration: '2:01' },
         { title: 'Crazytown!', duration: '3:01'},
         { title: 'Too many pets', duration: '2:14' },
         { title: 'Dogs and Cats Living Together', duration: '2:33'}
     ]
 };

var createSongRow = function(songNumber, songName, songLength) {
    var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
     return template;
 };

     // select all HTML elements to display
     var albumTitle = document.getElementsByClassName('album-view-title')[0];
     var albumArtist = document.getElementsByClassName('album-view-artist')[0];
     var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
     var albumImage = document.getElementsByClassName('album-cover-art')[0];
     var albumSongList = document.getElementsByClassName('album-view-song-list')[0];
 
var setCurrentAlbum = function(album) {

     // the firstChild property identifies the first child node of an element, and  nodeValue returns or sets the value of a node.
     albumTitle.firstChild.nodeValue = album.title;
     albumArtist.firstChild.nodeValue = album.artist;
     albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     albumImage.setAttribute('src', album.albumArtUrl);
 
     // clear the album song list HTML to make sure there are no interfering elements.
     albumSongList.innerHTML = '';
 
     // go through all the songs from the specified album object and insert them into the HTML using the innerHTML property
     for (var i = 0; i < album.songs.length; i++) {
         albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
     }
 };
 
 window.onload = function() {
     setCurrentAlbum(albumSylvia);
     
     var albums = [albumPicasso, albumMarconi, albumSylvia];
     var index = 0;
     albumImage.addEventListener('click', function(event) {
         setCurrentAlbum(albums[index]);
         index++;
         if (index == albums.length) {
             index=0;
         }
     });
 };