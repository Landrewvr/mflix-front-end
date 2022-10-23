import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MovieResponse } from 'src/app/models/movie-response';
import { environment } from 'src/environments/environment';
import { MovieService } from './movie.service';
import { HttpClientTestingModule, HttpTestingController } from  '@angular/common/http/testing';

describe('MovieService', () => {
  let service: MovieService;
  let httpTestingController: HttpTestingController;
  const baseApiRoute = environment.API_URL;
  const movies = {
    data: [
        {
            tomatoes: {
                viewer: { rating: 2.7, numReviews: 64, meter: 18 },
                dvd: "2000-08-15T00:00:00.000Z",
                website: "http://www.milestonefilms.com/",
                production: "World Film Corporation",
                lastUpdated: "2015-08-18T19:21:12.000Z",
            },
            genres: ["Drama", "History"],
            cast: [
                "Stanley Hunt",
                "Sarah Constance Smith Hunt",
                "Mrs. George Walkus",
                "Paddy 'Malid",
            ],
            languages: ["English"],
            directors: ["Edward S. Curtis"],
            countries: ["USA"],
            _id: "573a1390f29313caabcd516c",
            plot: "Original advertising for the film describes it as a drama of primitive life on the shores of the North Pacific...",
            runtime: 65,
            num_mflix_comments: 1,
            poster:
                "https://m.media-amazon.com/images/M/MV5BMjE3MjAyNzM5NV5BMl5BanBnXkFtZTgwMjA5OTg5NjE@._V1_SY1000_SX677_AL_.jpg",
            title: "In the Land of the Head Hunters",
            lastupdated: "2015-09-16 12:11:37.770000000",
            released: "1914-12-07T00:00:00.000Z",
            writers: ["Edward S. Curtis (story)"],
            awards: [{ wins: 1, nominations: 0, text: "1 win." }],
            year: 1914,
            imdb: { rating: 5.8, votes: 223, id: 4150 },
            type: "movie",
            lasupdated: "2020-03-19T23:35:17.315Z",
        },
        {
            tomatoes: {
                viewer: { rating: 3.7, numReviews: 53, meter: 67 },
                lastUpdated: "2015-04-27T19:06:35.000Z",
            },
            genres: ["Short", "Drama", "Fantasy"],
            cast: [
                "Martin Fuller",
                "Mrs. William Bechtel",
                "Walter Edwin",
                "Ethel Jewett",
            ],
            languages: ["English"],
            directors: ["Harold M. Shaw"],
            countries: ["USA"],
            _id: "573a1390f29313caabcd4323",
            plot: "A young boy, opressed by his mother, goes on an outing in the country with a social welfare group where he dares to dream of a land where the cares of his ordinary life fade.",
            runtime: 14,
            rated: "UNRATED",
            num_mflix_comments: 2,
            poster:
                "https://m.media-amazon.com/images/M/MV5BMTMzMDcxMjgyNl5BMl5BanBnXkFtZTcwOTgxNjg4Mg@@._V1_SY1000_SX677_AL_.jpg",
            title: "The Land Beyond the Sunset",
            fullplot:
                "Thanks to the Fresh Air Fund, a slum child escapes his drunken mother for a day's outing in the country. Upon arriving, he and the other children are told a story about a mythical land of no pain. Rather then return to the slum at day's end, the lad seeks to journey to that beautiful land beyond the sunset.",
            released: "1912-10-28T00:00:00.000Z",
            writers: ["Dorothy G. Shore"],
            awards: [{ wins: 1, nominations: 0, text: "1 win." }],
            lastupdated: "2015-08-29 00:27:45.437000000",
            year: 1912,
            imdb: { rating: 7.1, votes: 448, id: 488 },
            type: "movie",
            lasupdated: "2020-03-19T23:35:17.317Z",
        },
        {
            tomatoes: {
                viewer: { rating: 3.6, numReviews: 607, meter: 60 },
                dvd: "2005-09-06T00:00:00.000Z",
                lastUpdated: "2015-08-21T18:10:22.000Z",
            },
            genres: ["Fantasy"],
            cast: ["Tula Belle", "Robin Macdougall", "Edwin E. Reed", "Emma Lowry"],
            languages: ["English"],
            directors: ["Maurice Tourneur"],
            countries: ["USA"],
            _id: "573a1390f29313caabcd63d6",
            plot: "Two peasant children, Mytyl and Tyltyl, are led by Berylune, a fairy, to search for the Blue Bird of Happiness. Berylune gives Tyltyl a cap with a diamond setting, and when Tyltyl turns the...",
            runtime: 75,
            num_mflix_comments: 1,
            poster:
                "https://m.media-amazon.com/images/M/MV5BMjNlMThmNzItMTZlMS00YzJkLTk1MzktYzIyMzllOGFmZmRlXkEyXkFqcGdeQXVyMzE0MjY5ODA@._V1_SY1000_SX677_AL_.jpg",
            title: "The Blue Bird",
            fullplot:
                "Two peasant children, Mytyl and Tyltyl, are led by Berylune, a fairy, to search for the Blue Bird of Happiness. Berylune gives Tyltyl a cap with a diamond setting, and when Tyltyl turns the diamond, the children become aware of and conversant with the souls of a Dog and Cat, as well as of Fire, Water, Bread, Light, and other presumably inanimate things. The troupe thus sets off to find the elusive Blue Bird of Happiness.",
            released: "1918-03-31T00:00:00.000Z",
            writers: ["Maurice Maeterlinck (play)", "Charles Maigne"],
            awards: [{ wins: 1, nominations: 0, text: "1 win." }],
            lastupdated: "2015-07-20 00:32:04.810000000",
            year: 1918,
            imdb: { rating: 6.6, votes: 446, id: 8891 },
            type: "movie",
            lasupdated: "2020-03-19T23:35:17.318Z",
        },
        {
            tomatoes: {
                viewer: { rating: 3.7, numReviews: 2559, meter: 75 },
                critic: { rating: 7.6, numReviews: 6, meter: 100 },
                fresh: 6,
                rotten: 0,
                lastUpdated: "2015-08-08T19:16:10.000Z",
            },
            genres: ["Short", "Western"],
            cast: [
                "A.C. Abadie",
                "Gilbert M. 'Broncho Billy' Anderson",
                "George Barnes",
                "Justus D. Barnes",
            ],
            languages: ["English"],
            directors: ["Edwin S. Porter"],
            countries: ["USA"],
            _id: "573a1390f29313caabcd42e8",
            plot: "A group of bandits stage a brazen train hold-up, only to find a determined posse hot on their heels.",
            runtime: 11,
            poster:
                "https://m.media-amazon.com/images/M/MV5BMTU3NjE5NzYtYTYyNS00MDVmLWIwYjgtMmYwYWIxZDYyNzU2XkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_SY1000_SX677_AL_.jpg",
            title: "The Great Train Robbery",
            fullplot:
                "Among the earliest existing films in American cinema - notable as the first film that presented a narrative story to tell - it depicts a group of cowboy outlaws who hold up a train and rob the passengers. They are then pursued by a Sheriff's posse. Several scenes have color included - all hand tinted.",
            released: "1903-12-01T00:00:00.000Z",
            rated: "TV-G",
            awards: [{ wins: 1, nominations: 0, text: "1 win." }],
            lastupdated: "2015-08-13 00:27:59.177000000",
            year: 1903,
            imdb: { rating: 7.4, votes: 9847, id: 439 },
            type: "movie",
            lasupdated: "2020-03-19T23:35:17.318Z",
        },
        {
            tomatoes: {
                viewer: { rating: 4.2, numReviews: 14860, meter: 96 },
                critic: { rating: 8.7, numReviews: 22, meter: 100 },
                dvd: "2004-03-02T00:00:00.000Z",
                lastUpdated: "2015-09-14T17:49:56.000Z",
                rotten: 0,
                production: "First National Pictures Inc.",
                fresh: 22,
            },
            genres: ["Comedy", "Drama", "Family"],
            cast: ["Carl Miller", "Edna Purviance", "Jackie Coogan", "Charles Chaplin"],
            languages: ["English"],
            directors: ["Charles Chaplin"],
            countries: ["USA"],
            _id: "573a1391f29313caabcd715c",
            plot: "The Tramp cares for an abandoned child, but events put that relationship in jeopardy.",
            runtime: 68,
            rated: "NOT RATED",
            poster:
                "https://m.media-amazon.com/images/M/MV5BZjhhMThhNDItNTY2MC00MmU1LTliNDEtNDdhZjdlNTY5ZDQ1XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY1000_SX677_AL_.jpg",
            title: "The Kid",
            fullplot:
                'The opening title reads: "A comedy with a smile--and perhaps a tear". As she leaves the charity hospital and passes a church wedding, Edna deposits her new baby with a pleading note in a limousine and goes off to commit suicide. The limo is stolen by thieves who dump the baby by a garbage can. Charlie the Tramp finds the baby and makes a home for him. Five years later Edna has become an opera star but does charity work for slum youngsters in hope of finding her boy. A doctor called by Edna discovers the note with the truth about the Kid and reports it to the authorities who come to take him away from Charlie. Before he arrives at the Orphan Asylum Charlie steals him back and takes him to a flophouse. The proprietor reads of a reward for the Kid and takes him to Edna. Charlie is later awakened by a kind policeman who reunites him with the Kid at Edna\'s mansion.',
            released: "1921-02-06T00:00:00.000Z",
            writers: ["Charles Chaplin"],
            awards: [{ wins: 1, nominations: 0, text: "1 win." }],
            lastupdated: "2015-09-05 00:24:11.143000000",
            year: 1921,
            imdb: { rating: 8.4, votes: 56858, id: 12349 },
            type: "movie",
            lasupdated: "2020-03-19T23:35:17.318Z",
        },
        {
            tomatoes: {
                viewer: { rating: 3.7, numReviews: 3717, meter: 72 },
                critic: { rating: 8.2, numReviews: 21, meter: 95 },
                dvd: "1999-05-11T00:00:00.000Z",
                lastUpdated: "2015-08-21T18:30:26.000Z",
                consensus:
                    "Thought-provoking and beautifully filmed, D.W. Griffith's Broken Blossoms presents a master at the top of his form.",
                rotten: 1,
                production: "Kino on Video",
                fresh: 20,
            },
            genres: ["Drama", "Romance"],
            cast: [
                "Lillian Gish",
                "Richard Barthelmess",
                "Donald Crisp",
                "Arthur Howard",
            ],
            languages: [],
            directors: ["D.W. Griffith"],
            countries: ["USA"],
            _id: "573a1390f29313caabcd680a",
            plot: "A frail waif, abused by her brutal boxer father in London's seedy Limehouse District, is befriended by a sensitive Chinese immigrant with tragic consequences.",
            runtime: 90,
            rated: "NOT RATED",
            num_mflix_comments: 4,
            poster:
                "https://m.media-amazon.com/images/M/MV5BNTY0ODRmZDktMzM2MC00NThmLWEyMDMtODQzNWEyMjMxYTYzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_SX677_AL_.jpg",
            title: "Broken Blossoms or The Yellow Man and the Girl",
            fullplot:
                "Cheng Huan is a missionary whose goal is to bring the teachings of peace by Buddha to the civilized Anglo-Saxons. Upon landing in England, he is quickly disillusioned by the intolerance and apathy of the country. He becomes a storekeeper of a small shop. Out his window, he sees the young Lucy Burrows. She is regularly beaten by her prizefighter father, underfed and wears ragged clothes. Even in this deplorable condition, Cheng can see that she is a priceless beauty and he falls in love with her from afar. On the day that she passes out in front of his store, he takes her in and cares for her. With nothing but love in his heart, he dresses her in silks and provides food for her. Still weak, she stays in his shop that night and all that Cheng does is watch over her. The peace and happiness that he sees last only until Battling Burrows finds out that his daughter is with a foreigner.",
            released: "1919-10-20T00:00:00.000Z",
            writers: ["Thomas Burke (adapted from a story by)", "D.W. Griffith"],
            awards: [{ wins: 1, nominations: 0, text: "1 win." }],
            lastupdated: "2015-08-21 00:06:48.907000000",
            year: 1919,
            imdb: { rating: 7.7, votes: 6610, id: 9968 },
            type: "movie",
            lasupdated: "2020-03-19T23:35:17.319Z",
        },
        {
            tomatoes: {
                viewer: { rating: 4.1, numReviews: 3329, meter: 90 },
                critic: { rating: 9, numReviews: 23, meter: 96 },
                dvd: "1998-04-28T00:00:00.000Z",
                lastUpdated: "2015-09-15T17:02:36.000Z",
                rotten: 1,
                production: "MGM",
                fresh: 22,
            },
            genres: ["Comedy", "Family"],
            cast: ["Joe Roberts", "Ralph Bushman", "Craig Ward", "Monte Collins"],
            languages: ["English"],
            directors: ["John G. Blystone", "Buster Keaton"],
            countries: ["USA"],
            _id: "573a1391f29313caabcd7915",
            plot: "A man returns to his Appalachian homestead. On the trip, he falls for a young woman. The only problem is her family has vowed to kill every member of his family.",
            runtime: 65,
            rated: "NOT RATED",
            num_mflix_comments: 2,
            poster:
                "https://m.media-amazon.com/images/M/MV5BNTNjZjYxMDQtMTViNi00NTg0LWFmZTYtNTdiMzUxZWU3ZTU2XkEyXkFqcGdeQXVyNDQzMDg4Nzk@._V1_SY1000_SX677_AL_.jpg",
            title: "Our Hospitality",
            fullplot:
                "After her husband John McKay is killed in an ongoing feud with the Canfield family, a woman takes her baby boy Willie to her sister's house in New York hoping he will never know of the feud with the Canfields. Twenty years later Willie is a grown man and he receives a letter saying he has inherited his father's estate and must travel to his family home to take possession. On the train there he meets a beautiful young woman and falls in love only to learn that she's a Canfield. He accepts her invitation to dinner and quickly realizes that the Canfield men won't kill him while he's in their home. His plan to stay there as a permanent guest is short-lived and the Canfields are soon after him.",
            released: "1923-11-19T00:00:00.000Z",
            writers: [
                "Jean C. Havez (story)",
                "Clyde Bruckman (story)",
                "Joseph A. Mitchell (story)",
            ],
            awards: [{ wins: 0, nominations: 1, text: "1 nomination." }],
            lastupdated: "2015-08-11 00:02:19.313000000",
            year: 1923,
            imdb: { rating: 7.9, votes: 6646, id: 14341 },
            type: "movie",
            lasupdated: "2020-03-19T23:35:17.319Z",
        },
        {
            tomatoes: {
                viewer: { rating: 3.4, numReviews: 6168, meter: 76 },
                critic: { rating: 7.9, numReviews: 8, meter: 100 },
                dvd: "1999-11-23T00:00:00.000Z",
                lastUpdated: "2015-07-27T18:39:19.000Z",
                rotten: 0,
                production: "Paramount Pictures",
                fresh: 8,
            },
            genres: ["Adventure", "Fantasy", "Family"],
            cast: ["George Ali", "Esther Ralston", "Cyril Chadwick", "Mary Brian"],
            languages: [],
            directors: ["Herbert Brenon"],
            countries: ["USA"],
            _id: "573a1391f29313caabcd7c9e",
            plot: "Peter Pan enters the nursery of the Darling children and, with the help of fairy dust, leads them off to Never Never Land, where they meet the nefarious Captain Hook.",
            runtime: 105,
            num_mflix_comments: 1,
            poster:
                "https://m.media-amazon.com/images/M/MV5BODkwOTUxMDkyMV5BMl5BanBnXkFtZTgwOTA1MDQ0MjE@._V1_SY1000_SX677_AL_.jpg",
            title: "Peter Pan",
            fullplot:
                "Peter Pan, the kid who doesn't want to grow up, arrives at the Darling home searching for his shadow. He meets the Darling children and takes them to Never-Never Land, where they will fight against Capt. Hook and his pirate ship and crew. At the end the children will be back in their warm beds.",
            released: "1924-12-29T00:00:00.000Z",
            writers: ["J.M. Barrie (play)", "Willis Goldbeck (screenplay)"],
            awards: [{ wins: 1, nominations: 0, text: "1 win." }],
            lastupdated: "2015-08-09 01:05:18.003000000",
            year: 1924,
            imdb: { rating: 7.4, votes: 589, id: 15224 },
            type: "movie",
            lasupdated: "2020-03-19T23:35:17.320Z",
        },
        {
            tomatoes: {
                viewer: { rating: 3.6, numReviews: 659, meter: 70 },
                critic: { rating: 8.4, numReviews: 8, meter: 100 },
                dvd: "2004-02-03T00:00:00.000Z",
                lastUpdated: "2015-07-14T18:21:21.000Z",
                rotten: 0,
                fresh: 8,
            },
            genres: ["Adventure", "Romance", "Family"],
            cast: ["Wallace Beery", "Sam De Grasse", "Enid Bennett", "Paul Dickey"],
            languages: ["English"],
            directors: ["Allan Dwan"],
            countries: ["USA"],
            _id: "573a1391f29313caabcd7626",
            plot: "A nobleman becomes the vigilante Robin Hood who protects the oppressed English people from the tyrannical Prince John.",
            runtime: 143,
            num_mflix_comments: 1,
            poster:
                "https://m.media-amazon.com/images/M/MV5BYzRmMWIyNDEtYTRmYS00Y2FlLWJhOGUtYWZmNTI1YzZjOTc2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjUxODE0MDY@._V1_SY1000_SX677_AL_.jpg",
            title: "Robin Hood",
            fullplot:
                "Amid big-budget medieval pageantry, King Richard goes on the Crusades leaving his brother Prince John as regent, who promptly emerges as a cruel, grasping, treacherous tyrant. Apprised of England's peril by message from his lady-love Marian, the dashing Earl of Huntingdon endangers his life and honor by returning to oppose John, but finds himself and his friends outlawed, and Marian apparently dead. Enter Robin Hood, acrobatic champion of the oppressed, laboring to set things right through swash buckling feats and cliffhanging perils!",
            released: "1922-10-18T00:00:00.000Z",
            writers: ["Douglas Fairbanks (story)"],
            awards: [{ wins: 1, nominations: 0, text: "1 win." }],
            lastupdated: "2015-08-11 00:29:16.047000000",
            year: 1922,
            imdb: { rating: 7.7, votes: 1460, id: 13556 },
            type: "movie",
            lasupdated: "2020-03-19T23:35:17.320Z",
        },
        {
            tomatoes: {
                viewer: { rating: 3.6, numReviews: 2902, meter: 74 },
                critic: { rating: 8.1, numReviews: 15, meter: 100 },
                website:
                    "http://www.flickeralley.com/catalog/item/the-hunchback-of-notre-dame-1923",
                dvd: "2002-02-19T00:00:00.000Z",
                lastUpdated: "2015-09-17T18:03:58.000Z",
                rotten: 0,
                production: "Gravitas",
                fresh: 15,
            },
            genres: ["Drama", "Romance"],
            cast: ["Lon Chaney", "Patsy Ruth Miller", "Norman Kerry", "Kate Lester"],
            languages: [],
            directors: ["Wallace Worsley"],
            countries: ["USA"],
            _id: "573a1391f29313caabcd7850",
            plot: "In fifteenth century Paris, the brother of the archdeacon plots with the gypsy king to foment a peasant revolt. Meanwhile, a freakish hunchback falls in love with the gypsy queen.",
            runtime: 133,
            rated: "UNRATED",
            num_mflix_comments: 1,
            poster:
                "https://m.media-amazon.com/images/M/MV5BMjMyODkyNjc5MF5BMl5BanBnXkFtZTgwODY1NDM4MTE@._V1_SY1000_SX677_AL_.jpg",
            title: "The Hunchback of Notre Dame",
            fullplot:
                "Clopin bought Esmeralda from the gypsies when she was young. Dancing in the square at the festival, Esmeralda is spotted by Jehan, the evil brother of the good archdeacon Claude Frollo. When he sets Quasimodo out to kidnap Esmeralda, Phoebus, Captain of the Guards, rescues her and captures Quasimodo. The courts sentence Quasimodo to be flogged, and the only one who will give him water while he is tied in the square is Esmeralda. After Clopin forces Esmeralda to leave Phoebus at the ball, she sends a note to Phoebus to meet her at Notre-Dame. In the garden, Phoebus is stabbed in the back by Jehan. Esmeralda is accused of stabbing Phoebus, convicted by the courts and sentenced to hang. When Esmeralda again rejects Jehan, he tells her that Phoebus is dead, even though it is not true. Clopin, Phoebus and Quasimodo all try different ways to save Esmeralda.",
            released: "1923-09-06T00:00:00.000Z",
            writers: [
                "Victor Hugo",
                "Perley Poore Sheehan (adaptation)",
                "Edward T. Lowe Jr. (scenario)",
            ],
            awards: [{ wins: 1, nominations: 0, text: "1 win." }],
            lastupdated: "2015-09-03 00:43:12.727000000",
            year: 1923,
            imdb: { rating: 7.4, votes: 3289, id: 14142 },
            type: "movie",
            lasupdated: "2020-03-19T23:35:17.321Z",
        },
        {
            tomatoes: {
                viewer: { rating: 4.2, numReviews: 729, meter: 91 },
                critic: { rating: 9.1, numReviews: 10, meter: 100 },
                fresh: 10,
                rotten: 0,
                lastUpdated: "2015-08-26T18:28:48.000Z",
            },
            genres: ["Drama", "Romance", "War"],
            cast: [
                "John Gilbert",
                "Renèe Adorèe",
                "Hobart Bosworth",
                "Claire McDowell",
            ],
            languages: [],
            directors: ["King Vidor", "George W. Hill"],
            countries: ["USA"],
            _id: "573a1391f29313caabcd7e23",
            plot: "A young American soldier witnesses the horrors of the Great War.",
            runtime: 151,
            rated: "NOT RATED",
            title: "The Big Parade",
            poster:
                "https://m.media-amazon.com/images/M/MV5BNjY2ZDAyNTUtOGE3OC00OWEzLThjNjEtMmVjMTU0ZWMyMmNmXkEyXkFqcGdeQXVyMjcxNjI4NTk@._V1_SY1000_SX677_AL_.jpg",
            fullplot:
                "The idle son of a rich businessman joins the army when the U.S.A. enters World War One. He is sent to France, where he becomes friends with two working-class soldiers. He also falls in love with a Frenchwoman, but has to leave her to move to the frontline.",
            num_mflix_comments: 1,
            writers: [
                "Laurence Stallings (story)",
                "Harry Behn (scenario)",
                "Joseph Farnham (titles)",
            ],
            awards: [{ wins: 3, nominations: 0, text: "3 wins." }],
            lastupdated: "2015-08-12 00:47:35.017000000",
            year: 1925,
            imdb: { rating: 8.3, votes: 4605, id: 15624 },
            type: "movie",
            lasupdated: "2020-03-19T23:35:17.321Z",
        },
        {
            tomatoes: {
                viewer: { rating: 3.7, numReviews: 29 },
                lastUpdated: "2015-08-10T19:20:03.000Z",
            },
            genres: ["Animation", "Short", "Comedy"],
            cast: ["Winsor McCay", "George McManus", "Roy L. McCardell"],
            languages: ["English"],
            directors: ["Winsor McCay"],
            countries: ["USA"],
            _id: "573a1390f29313caabcd50e5",
            plot: "The cartoonist, Winsor McCay, brings the Dinosaurus back to life in the figure of his latest creation, Gertie the Dinosaur.",
            runtime: 12,
            num_mflix_comments: 1,
            poster:
                "https://m.media-amazon.com/images/M/MV5BMTQxNzI4ODQ3NF5BMl5BanBnXkFtZTgwNzY5NzMwMjE@._V1_SY1000_SX677_AL_.jpg",
            title: "Gertie the Dinosaur",
            fullplot:
                "Winsor Z. McCay bets another cartoonist that he can animate a dinosaur. So he draws a big friendly herbivore called Gertie. Then he get into his own picture. Gertie walks through the picture, eats a tree, meets her creator, and takes him carefully on her back for a ride.",
            released: "1914-09-15T00:00:00.000Z",
            writers: ["Winsor McCay"],
            awards: [{ wins: 1, nominations: 0, text: "1 win." }],
            lastupdated: "2015-08-18 01:03:15.313000000",
            year: 1914,
            imdb: { rating: 7.3, votes: 1837, id: 4008 },
            type: "movie",
            lasupdated: "2020-03-19T23:35:17.322Z",
        },
        {
            tomatoes: {
                viewer: { rating: 4, numReviews: 46806, meter: 87 },
                critic: { rating: 9, numReviews: 62, meter: 97 },
                dvd: "1997-10-22T00:00:00.000Z",
                lastUpdated: "2015-08-20T19:15:25.000Z",
                consensus:
                    "One of the silent era's most influential masterpieces, Nosferatu's eerie, gothic feel -- and a chilling performance from Max Shrek as the vampire -- set the template for the horror films that followed.",
                rotten: 2,
                production: "Film Arts Guild",
                fresh: 60,
            },
            genres: ["Horror"],
            cast: [
                "Max Schreck",
                "Gustav von Wangenheim",
                "Greta Schrèder",
                "Georg H. Schnell",
            ],
            languages: ["German"],
            directors: ["F.W. Murnau"],
            countries: ["Germany"],
            _id: "573a1391f29313caabcd75b5",
            plot: 'Vampire Count Orlok expresses interest in a new residence and real estate agent Hutter\'s wife. Silent classic based on the story "Dracula."',
            runtime: 81,
            rated: "UNRATED",
            poster:
                "https://m.media-amazon.com/images/M/MV5BMTAxYjEyMTctZTg3Ni00MGZmLWIxMmMtOGM2NTFiY2U3MmExXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_SX677_AL_.jpg",
            title: "Nosferatu",
            fullplot:
                "Wisbourg, Germany based estate agent Knock dispatches his associate, Hutter, to Count Orlok's castle in Transylvania as the Count wants to purchase an isolated house in Wisbourg. They plan on selling him the one across the way from Hutter's own home. Hutter leaves his innocent wife, Ellen, with some friends while he is away. Hutter's trek is an unusual one, with many locals not wanting to take him near the castle where strange events have been occurring. Once at the castle, Hutter does manage to sell the Count the house, but he also notices and feels unusual occurrences, primarily feeling like there is a dark shadow hanging over him, even in the daytime when the Count is unusually asleep. Hutter eventually sees the Count's sleeping chamber in a crypt, and based on a book he has recently read, believes the Count is really a vampire or Nosferatu. While Hutter is trapped in the castle, the Count, hiding in a shipment of coffins, makes his way to Wisbourg, causing death along his way, which most attribute to the plague. Hutter himself tries to rush home to save his town and most importantly save Ellen from Nosferatu's imminent arrival. In Wisbourg, Ellen can feel the impending darkness as Nosferatu gets closer. But she learns that a sinless woman can sacrifice herself to kill the vampire. Will Hutter be able to save Ellen either from Nosferatu and/or her self-sacrifice?",
            released: "1929-06-03T00:00:00.000Z",
            writers: [
                "Henrik Galeen (screen play)",
                'Bram Stoker (based on the novel: "Dracula")',
            ],
            awards: [{ wins: 1, nominations: 1, text: "1 win & 1 nomination." }],
            lastupdated: "2015-08-21 00:04:53.453000000",
            year: 1922,
            imdb: { rating: 8, votes: 63322, id: 13442 },
            type: "movie",
            lasupdated: "2020-03-19T23:35:17.322Z",
        },
        {
            tomatoes: {
                viewer: { rating: 4, numReviews: 18323, meter: 86 },
                critic: { rating: 9.1, numReviews: 44, meter: 100 },
                dvd: "1998-10-07T00:00:00.000Z",
                boxOffice: "$51.0k",
                consensus:
                    "A technical masterpiece, Battleship Potemkin is Soviet cinema at its finest, and its montage editing techniques remain influential to this day.",
                rotten: 0,
                production: "Kino International",
                lastUpdated: "2015-08-19T19:22:13.000Z",
                fresh: 44,
            },
            genres: ["History", "War"],
            cast: [
                "Aleksandr Antonov",
                "Vladimir Barsky",
                "Grigori Aleksandrov",
                "Ivan Bobrov",
            ],
            languages: ["Russian"],
            directors: ["Sergei M. Eisenstein"],
            countries: ["Soviet Union"],
            _id: "573a1391f29313caabcd7e30",
            plot: "A dramatized account of a great Russian naval mutiny and a resulting street demonstration which brought on a police massacre.",
            runtime: 66,
            rated: "UNRATED",
            num_mflix_comments: 1,
            poster:
                "https://m.media-amazon.com/images/M/MV5BMTEyMTQzMjQ0MTJeQTJeQWpwZ15BbWU4MDcyMjg4OTEx._V1_SY1000_SX677_AL_.jpg",
            title: "Battleship Potemkin",
            fullplot:
                "Based on the historical events the movie tells the story of a riot at the battleship Potemkin. What started as a protest strike when the crew was given rotten meat for dinner ended in a riot. The sailors raised the red flag and tried to ignite the revolution in their home port Odessa.",
            released: "1925-12-24T00:00:00.000Z",
            writers: ["Nina Agadzhanova (script by)"],
            awards: [{ wins: 1, nominations: 0, text: "1 win." }],
            lastupdated: "2015-08-18 00:22:19.750000000",
            year: 1925,
            imdb: { rating: 8, votes: 36901, id: 15648 },
            type: "movie",
            lasupdated: "2020-03-19T23:35:17.323Z",
        },
        {
            tomatoes: {
                viewer: { rating: 3.6, numReviews: 1839, meter: 82 },
                critic: { rating: 8.1, numReviews: 8, meter: 100 },
                dvd: "2001-11-20T00:00:00.000Z",
                lastUpdated: "2015-06-22T19:12:04.000Z",
                rotten: 0,
                fresh: 8,
            },
            genres: ["Comedy", "Western"],
            cast: ["Howard Truesdale", "Kathleen Myers", "Ray Thompson", "Brown Eyes"],
            languages: ["English"],
            directors: ["Buster Keaton"],
            countries: ["USA"],
            _id: "573a1391f29313caabcd7f08",
            plot: "With little luck at keeping a job in the city a New Yorker tries work in the country and eventually finds his way leading a herd of cattle to the West Coast.",
            runtime: 68,
            rated: "NOT RATED",
            poster:
                "https://m.media-amazon.com/images/M/MV5BMTk4MDQzODIwOV5BMl5BanBnXkFtZTgwNTQ3NTY2MzE@._V1_SY1000_SX677_AL_.jpg",
            title: "Go West",
            fullplot:
                "A young man who doesn't find a job in his small hometown, tries his luck in New York, but is overwelmed by the life of the city, so decides to try his luck somewhere else after a only a few minutes in New York. He falls off a train near a ranch, where he tries his luck as a cowbowy, being in his own way very sucessful. But he shows what he can do when the farm has to bring a 100 head of cattle to the slaughterhouses of Los Angeles to avoid going bankrupt, against the will of his neighbour who wants a better price. After a shoot-out with the neighbour's men he's the only person on a Los Angeles bound train with 1000 cows....",
            released: "1925-11-01T00:00:00.000Z",
            writers: [
                "Buster Keaton",
                "Lex Neal (assistant writer)",
                "Raymond Cannon (scenario)",
            ],
            awards: [{ wins: 0, nominations: 1, text: "1 nomination." }],
            lastupdated: "2015-08-14 00:31:35.990000000",
            year: 1925,
            imdb: { rating: 7.3, votes: 2258, id: 15863 },
            type: "movie",
            lasupdated: "2020-03-19T23:35:17.323Z",
        },
        {
            tomatoes: {
                viewer: { rating: 3.3, numReviews: 71, meter: 55 },
                production: "Pathè Exchange",
                lastUpdated: "2015-08-21T18:45:11.000Z",
            },
            genres: ["Comedy", "Short", "Action"],
            cast: [
                "Harold Lloyd",
                "Mildred Davis",
                "'Snub' Pollard",
                "Peggy Cartwright",
            ],
            languages: ["English"],
            directors: ["Alfred J. Goulding", "Hal Roach"],
            countries: ["USA"],
            _id: "573a1391f29313caabcd68d0",
            plot: "A penniless young man tries to save an heiress from kidnappers and help her secure her inheritance.",
            runtime: 22,
            rated: "TV-G",
            poster:
                "https://m.media-amazon.com/images/M/MV5BNzE1OWRlNDgtMTllNi00NTZiLWIyNTktYTk0MDY1ZWUwYTc5XkEyXkFqcGdeQXVyMjUxODE0MDY@._V1_SY1000_SX677_AL_.jpg",
            title: "From Hand to Mouth",
            fullplot:
                "As a penniless man worries about how he will manage to eat, he is joined by a young waif and her dog, who are in the same predicament. Meanwhile, across town a dishonest lawyer is working with a gang of criminals, trying to swindle an innocent young heiress out of her inheritance. As the heiress is on her way home from the lawyer's office, she notices the young man and the waif in the midst of their latest problem with the authorities, and she rescues them. Later on, the young man will have an unexpected opportunity to repay her for her kindness.",
            released: "1919-12-28T00:00:00.000Z",
            writers: ["H.M. Walker (titles)"],
            awards: [{ wins: 0, nominations: 1, text: "1 nomination." }],
            lastupdated: "2015-04-17 00:16:14.220000000",
            year: 1919,
            imdb: { rating: 7, votes: 639, id: 10146 },
            type: "movie",
            lasupdated: "2020-03-19T23:35:17.324Z",
        },
        {
            tomatoes: {
                viewer: { rating: 4, numReviews: 3129, meter: 89 },
                critic: { rating: 9.1, numReviews: 13, meter: 100 },
                dvd: "2001-11-20T00:00:00.000Z",
                lastUpdated: "2015-09-15T18:06:23.000Z",
                rotten: 0,
                production: "MGM",
                fresh: 13,
            },
            genres: ["Action", "Comedy"],
            cast: ["Buster Keaton", "Kathryn McGuire", "Frederick Vroom"],
            languages: [],
            directors: ["Donald Crisp", "Buster Keaton"],
            countries: ["USA"],
            _id: "573a1391f29313caabcd7c4c",
            plot: "Two spoiled rich people find themselves trapped on an empty passenger ship.",
            runtime: 59,
            rated: "UNRATED",
            poster:
                "https://m.media-amazon.com/images/M/MV5BMzA1ODQ1Nzk0MV5BMl5BanBnXkFtZTgwOTEwNTQ2MzE@._V1_SY1000_SX677_AL_.jpg",
            title: "The Navigator",
            fullplot:
                'Rollo decides to marry his sweetheart Betsy and sail to Honolulu. When she rejects him he decides to go alone but boards the wrong ship, the "Navigator" owned by Betsy\'s father. Unaware of this, Betsy boards the ship to look for her father. whom spies capture before cutting the ship loose. It drifts out to sea with the two socialites each unaware of there being anyone else on board.',
            released: "1924-10-13T00:00:00.000Z",
            writers: [
                "Clyde Bruckman (story)",
                "Joseph A. Mitchell (story)",
                "Jean C. Havez (story)",
            ],
            awards: [{ wins: 0, nominations: 1, text: "1 nomination." }],
            lastupdated: "2015-08-11 00:02:35.483000000",
            year: 1924,
            imdb: { rating: 8.1, votes: 6094, id: 15163 },
            type: "movie",
            lasupdated: "2020-03-19T23:35:17.324Z",
        },
        {
            tomatoes: {
                viewer: { rating: 3.4, numReviews: 89, meter: 47 },
                lastUpdated: "2015-08-20T18:51:24.000Z",
            },
            genres: ["Animation", "Short", "Comedy"],
            cast: ["Winsor McCay"],
            languages: ["English"],
            directors: ["Winsor McCay", "J. Stuart Blackton"],
            countries: ["USA"],
            _id: "573a1390f29313caabcd4803",
            plot: "Cartoon figures announce, via comic strip balloons, that they will move - and move they do, in a wildly exaggerated style.",
            runtime: 7,
            num_mflix_comments: 1,
            poster:
                "https://m.media-amazon.com/images/M/MV5BYzg2NjNhNTctMjUxMi00ZWU4LWI3ZjYtNTI0NTQxNThjZTk2XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SY1000_SX677_AL_.jpg",
            title:
                "Winsor McCay, the Famous Cartoonist of the N.Y. Herald and His Moving Comics",
            fullplot:
                "Cartoonist Winsor McCay agrees to create a large set of drawings that will be photographed and made into a motion picture. The job requires plenty of drawing supplies, and the cartoonist must also overcome some mishaps caused by an assistant. Finally, the work is done, and everyone can see the resulting animated picture.",
            released: "1911-04-08T00:00:00.000Z",
            writers: [
                'Winsor McCay (comic strip "Little Nemo in Slumberland")',
                "Winsor McCay (screenplay)",
            ],
            awards: [{ wins: 1, nominations: 0, text: "1 win." }],
            lastupdated: "2015-08-29 01:09:03.030000000",
            year: 1911,
            imdb: { rating: 7.3, votes: 1034, id: 1737 },
            type: "movie",
            lasupdated: "2020-03-19T23:35:17.325Z",
        },
        {
            tomatoes: {
                viewer: { rating: 3.8, numReviews: 2118, meter: 82 },
                critic: { rating: 8.8, numReviews: 13, meter: 100 },
                dvd: "2000-05-16T00:00:00.000Z",
                lastUpdated: "2015-09-15T17:02:33.000Z",
                rotten: 0,
                fresh: 13,
            },
            genres: ["Action", "Adventure", "Crime"],
            cast: ["Musidora", "èdouard Mathè", "Marcel Lèvesque", "Jean Aymè"],
            languages: ["French"],
            directors: ["Louis Feuillade"],
            countries: ["France"],
            _id: "573a1390f29313caabcd5967",
            plot: "An intrepid reporter and his loyal friend battle a bizarre secret society of criminals known as The Vampires.",
            runtime: 399,
            rated: "NOT RATED",
            poster:
                "https://m.media-amazon.com/images/M/MV5BMTc1NTY3NDIzNl5BMl5BanBnXkFtZTgwNTIyODg5MTE@._V1_SY1000_SX677_AL_.jpg",
            title: "Les vampires",
            fullplot:
                "An intrepid reporter and his loyal friend battle a bizarre secret society of criminals known as The Vampires.",
            released: "1916-11-23T00:00:00.000Z",
            writers: ["Louis Feuillade"],
            awards: [{ wins: 0, nominations: 1, text: "1 nomination." }],
            lastupdated: "2015-09-02 00:24:27.333000000",
            year: 1915,
            imdb: { rating: 6.8, votes: 2878, id: 6206 },
            type: "movie",
            lasupdated: "2020-03-19T23:35:17.326Z",
        },
        {
            tomatoes: {
                viewer: { rating: 0, numReviews: 7 },
                lastUpdated: "2015-08-07T18:42:35.000Z",
            },
            genres: ["Drama"],
            cast: ["Howard C. Hickman", "Enid Markey", "Lola May", "Kate Bruce"],
            languages: [],
            directors: [
                "Reginald Barker",
                "Thomas H. Ince",
                "Raymond B. West",
                "Walter Edwards",
                "David Hartford",
                "Jay Hunt",
                "J. Parker Read Jr.",
            ],
            countries: ["USA"],
            _id: "573a1390f29313caabcd5a93",
            plot: "Christ takes on the form of a pacifist count to end a senseless war.",
            runtime: 78,
            num_mflix_comments: 2,
            poster:
                "https://upload.wikimedia.org/wikipedia/commons/6/66/Civilization_Poster.jpg",
            title: "Civilization",
            fullplot:
                "Allegorical film about peace. A king starts a war, many of the women are against it, people are pressed into service. A count has constructed a submarine and gets the order to sink an ocean liner, that is also carrying - supposedly - ammunition for the enemy. The count refuses to fire the torpedos, and sinks the submarine. He survives, but in a limbo between death and life where he meets Jesus, who takes him over to preach peace. Naturally the king arrests him and sentences him to death for treason, but then Jesus shows him the real face of war.",
            released: "1916-06-02T00:00:00.000Z",
            writers: ["C. Gardner Sullivan"],
            awards: [{ wins: 1, nominations: 0, text: "1 win." }],
            lastupdated: "2015-04-30 02:13:27.863000000",
            year: 1916,
            imdb: { rating: 6.3, votes: 162, id: 6517 },
            type: "movie",
            lasupdated: "2020-03-19T23:35:17.326Z",
        },
        {
            tomatoes: {
                viewer: { rating: 4.1, numReviews: 636, meter: 90 },
                dvd: "2001-04-12T00:00:00.000Z",
                lastUpdated: "2015-09-12T17:16:45.000Z",
            },
            genres: ["Short", "Comedy", "Drama"],
            cast: [
                "Charles Chaplin",
                "Edna Purviance",
                "Eric Campbell",
                "Albert Austin",
            ],
            languages: ["English"],
            directors: ["Charles Chaplin"],
            countries: ["USA"],
            _id: "573a1390f29313caabcd60e4",
            plot: "Charlie is an immigrant who endures a challenging voyage and gets into trouble as soon as he arrives in America.",
            runtime: 30,
            num_mflix_comments: 3,
            poster:
                "https://m.media-amazon.com/images/M/MV5BMTNkYWU5YjMtMjY2My00MDI4LTlmYzQtNTFkNTFjM2E1MTVlXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SY1000_SX677_AL_.jpg",
            title: "The Immigrant",
            fullplot:
                "Charlie is on his way to the USA. He wins in a card game, puts the money in Edna's bag (she and her sick mother have been robbed of everything). When he retrieves a little for himself he is accused of being a thief. Edna clears his name. Later, broke, Charlie finds a coin and goes into a restaurant. There he finds Edna, whose mother has died, and asks her to join him. When he reaches for the coin to pay for their meals it is missing (it has fallen through a hole in his pocket).",
            released: "1917-06-17T00:00:00.000Z",
            rated: "UNRATED",
            awards: [{ wins: 1, nominations: 0, text: "1 win." }],
            lastupdated: "2015-09-17 04:52:02.293000000",
            year: 1917,
            imdb: { rating: 7.8, votes: 4680, id: 8133 },
            type: "movie",
            lasupdated: "2020-03-19T23:35:17.327Z",
        },
        {
            tomatoes: {
                viewer: { rating: 3.7, numReviews: 521, meter: 83 },
                critic: { rating: 7.2, numReviews: 8, meter: 75 },
                dvd: "2006-02-14T00:00:00.000Z",
                lastUpdated: "2015-07-23T18:58:55.000Z",
                rotten: 2,
                fresh: 6,
            },
            genres: ["Western"],
            cast: [
                "George O'Brien",
                "Madge Bellamy",
                "Charles Edward Bull",
                "Cyril Chadwick",
            ],
            languages: ["English"],
            directors: ["John Ford"],
            countries: ["USA"],
            _id: "573a1391f29313caabcd7bc3",
            plot: "Springfield, Illinois. Brandon, a surveyor, dreams of building a railway to the west, but Marsh, a contractor, is sceptical. Abraham Lincoln looks on as their children, Davy Brandon and ...",
            runtime: 150,
            rated: "PASSED",
            title: "The Iron Horse",
            num_mflix_comments: 1,
            poster:
                "https://m.media-amazon.com/images/M/MV5BMGYwNjkxMmQtYzI1My00YzA4LTg2MGMtMjlmZjIzMWMwZDE1XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY1000_SX677_AL_.jpg",
            fullplot:
                "Springfield, Illinois. Brandon, a surveyor, dreams of building a railway to the west, but Marsh, a contractor, is sceptical. Abraham Lincoln looks on as their children, Davy Brandon and Miriam Marsh, play together. Brandon sets off with Davy to survey a route. They discover a new pass which will shave 200 miles off the expected distance, but they are set upon by a party of Cheyenne. One of them, a white renegade with only two fingers on his right hand, kills Brandon and scalps him. Davy buries his father... Years pass. It is 1862 and Lincoln signs the bill authorizing construction of the Union Pacific and Central Pacific railways. Marsh is principal contractor and Miriam is engaged to Jesson, the chief engineer... Crews of Chinese, Italians, and Irish work to build the railway while resisting Indian attack. When the pay train is delayed by Indian ambush, the Italians go on strike. Miriam persuades them to return to work... Marsh needs to find a shortcut through the Black Hills. To finish on time, he needs to shorten the route by 200 miles. Bauman, the biggest land owner, wants the route to stay the same - through his land. Marsh has entrusted Jesson with finding the new route. Bauman has Ruby, a saloon girl, persuade Jesson to do otherwise... Davy, now a pony express rider, recalls his father's discovery. He sets off to find the pass. He goes alone, except for Jesson...",
            writers: [
                "Charles Kenyon (story)",
                "John Russell (story)",
                "Charles Kenyon (scenario)",
                "Charles Darnton (titles)",
            ],
            awards: [{ wins: 1, nominations: 0, text: "1 win." }],
            lastupdated: "2015-09-02 00:21:48.663000000",
            year: 1924,
            imdb: { rating: 7.3, votes: 1276, id: 15016 },
            type: "movie",
            lasupdated: "2020-03-19T23:35:17.327Z",
        },
        {
            tomatoes: {
                viewer: { rating: 3.9, numReviews: 255, meter: 78 },
                critic: { rating: 8.5, numReviews: 12, meter: 92 },
                dvd: "2014-03-25T00:00:00.000Z",
                lastUpdated: "2015-08-31T18:35:24.000Z",
                rotten: 1,
                production: "Criterion Collection",
                fresh: 11,
            },
            genres: ["Comedy", "Family", "Sport"],
            cast: [
                "Harold Lloyd",
                "Jobyna Ralston",
                "Brooks Benedict",
                "James Anderson",
            ],
            languages: ["English"],
            directors: ["Fred C. Newmeyer", "Sam Taylor"],
            countries: ["USA"],
            _id: "573a1391f29313caabcd7f07",
            plot: "Nerdy college student will do anything to become popular on campus.",
            runtime: 76,
            rated: "NOT RATED",
            poster:
                "https://m.media-amazon.com/images/M/MV5BMGJmNTE4MGYtZWY2My00YmUzLWFiOWUtY2VkNmEzZGQ1ZGViXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SY1000_SX677_AL_.jpg",
            title: "The Freshman",
            fullplot:
                "Harold Lamb's dream is to go to college and become the most popular student on campus, much like the character Speedy played by actor Lester Laurel in the movie \"The College Hero\". Accepted into Tate College, Harold plans on emulating Speedy, including giving himself the nickname Speedy, to gain that popularity, not realizing that if he does so, he will be more the buffoon than the hero. To be the most popular student, he will have to outdo the current most popular student, football captain Chet Trask. Unaware Speedy's task is made all the more difficult when one of the upperclassmen, seeing how hard Speedy is trying to impress, does whatever he can to make Speedy look all the more ridiculous, all the while Speedy believing he is achieving his dream. The bully's efforts are made all the more easy as Speedy is able to buy his way to seeming popularity with the small nest egg he was able to accumulate from work. The one thing that Speedy may not be able to buy is his way onto the football team, which he is convinced is the only surefire way to becoming the campus hero, despite not realizing that he truly is not the football type. While Speedy remains unaware how he truly looks to his classmates, Peggy, the daughter of the owner of the rooming house where he is staying, is aware, she who is in love with him, and he with her. The love of a good woman may be able to provide Speedy with a clearer understanding of who he truly should be to impress, and/or get his mind focused on other things other than being everyone's best friend.",
            released: "1925-09-20T00:00:00.000Z",
            writers: [
                "Sam Taylor (story)",
                "Ted Wilde (story)",
                "John Grey (story)",
                "Tim Whelan (story)",
            ],
            awards: [{ wins: 1, nominations: 0, text: "1 win." }],
            lastupdated: "2015-08-19 00:30:51.783000000",
            year: 1925,
            imdb: { rating: 7.6, votes: 3377, id: 15841 },
            type: "movie",
            lasupdated: "2020-03-19T23:35:17.327Z",
        },
        {
            tomatoes: {
                viewer: { rating: 4.3, numReviews: 2435, meter: 90 },
                critic: { rating: 9.3, numReviews: 17, meter: 100 },
                lastUpdated: "2015-09-14T20:21:50.000Z",
                rotten: 0,
                production: "Warner Home Video",
                fresh: 17,
            },
            genres: ["Drama", "Thriller"],
            cast: ["Zasu Pitts", "Gibson Gowland", "Jean Hersholt", "Dale Fuller"],
            languages: ["English"],
            directors: ["Erich von Stroheim"],
            countries: ["USA"],
            _id: "573a1391f29313caabcd7f19",
            plot: "The sudden fortune won from a lottery fans such destructive greed that it ruins the lives of the three people involved.",
            runtime: 140,
            rated: "NOT RATED",
            poster:
                "https://i.etsystatic.com/24830546/r/il/25d069/2665560346/il_794xN.2665560346_p4f8.jpg",
            title: "Greed",
            fullplot:
                "John McTeague was a simple slow man who became a dentist after working at the Big Dipper Gold Mine. He is now being hunted in Death Valley by his ex-best friend Marcus and the law. His lot was cast the day that he meet his future wife Trina in his office. She was with Marcus and she bought a lottery ticket. Well Mac fell for her and Marcus stepped aside. When Mac and Trina married, she won the Lottery for $5000 and became obsessive about the money in gold. Marcus is steamed as he stepped aside and now she is rich so he has the law shut down Mac as he has no official schooling for his dentistry. Trina fearful that they will take her gold away sells everything and takes all Mac earns when he is working. She adds to her stash of gold as they both live as paupers. When Mac has no job and no money, he leaves and Trina moves. Driven to desperation at being poor and hungry he finds Trina and demands the gold.",
            released: "1925-01-26T00:00:00.000Z",
            writers: [
                "June Mathis (screen adaptation and scenario)",
                "Erich von Stroheim (screen adaptation and scenario)",
                'Frank Norris (from the American classic "McTeague" by)',
            ],
            awards: [{ wins: 1, nominations: 0, text: "1 win." }],
            lastupdated: "2015-09-05 00:00:55.113000000",
            year: 1924,
            imdb: { rating: 7.9, votes: 6649, id: 15881 },
            type: "movie",
            lasupdated: "2020-03-19T23:35:17.328Z",
        },
        {
            tomatoes: {
                viewer: { rating: 3.7, numReviews: 595, meter: 90 },
                critic: { rating: 7.6, numReviews: 5, meter: 100 },
                dvd: "2000-03-28T00:00:00.000Z",
                lastUpdated: "2015-07-04T18:53:48.000Z",
                rotten: 0,
                fresh: 5,
            },
            genres: ["Documentary"],
            cast: [
                "Merian C. Cooper",
                "Ernest B. Schoedsack",
                "Marguerite Harrison",
                "Haidar Khan",
            ],
            languages: [],
            directors: ["Merian C. Cooper", "Ernest B. Schoedsack"],
            countries: ["USA"],
            _id: "573a1391f29313caabcd7f11",
            plot: "The struggles of a hardscrabble Iranian nomadic tribe as they journey through bleak country to reach the grasslands that will save their livestock.",
            runtime: 71,
            rated: "PASSED",
            poster:
                "https://cdn.shopify.com/s/files/1/0150/7896/products/GrassMilestoneCInemathequeLogo_400x.jpg?v=1568667586",
            title: "Grass: A Nation's Battle for Life",
            fullplot:
                "The real-life struggles of the Bakhtiari tribe of Southern Persia (Iran) to migrate with 50,000 people and ten times as much livestock over seemingly impassable natural barriers of mountain and river during harsh weather conditions to reach grazing lands for their cattle and other livestock. Their hardscrabble life is portrayed with poetically beautiful cinematography in possibly the greatest documentary of the silent era.",
            released: "1925-03-20T00:00:00.000Z",
            writers: ["Richard Carver (titled by)", "Terry Ramsaye (titled by)"],
            awards: [{ wins: 1, nominations: 0, text: "1 win." }],
            lastupdated: "2015-08-29 00:37:14.843000000",
            year: 1925,
            imdb: { rating: 7.9, votes: 677, id: 15873 },
            type: "movie",
            lasupdated: "2020-03-19T23:35:17.330Z",
        },
        {
            tomatoes: {
                viewer: { rating: 3.5, numReviews: 377, meter: 68 },
                lastUpdated: "2015-04-28T19:29:23.000Z",
            },
            genres: ["Crime", "Drama", "Mystery"],
            cast: ["Lon Chaney", "Leatrice Joy", "John Bowers", "Hardee Kirkland"],
            languages: [],
            directors: ["Wallace Worsley"],
            countries: ["USA"],
            _id: "573a1391f29313caabcd6f98",
            plot: "A romantic rivalry among members of a secret society becomes even tenser when one of the men is assigned to carry out an assassination.",
            runtime: 75,
            rated: "PASSED",
            num_mflix_comments: 3,
            poster:
                "https://m.media-amazon.com/images/M/MV5BMTkwOTUyNDk1N15BMl5BanBnXkFtZTYwODI3MzI3._V1_SY1000_SX677_AL_.jpg",
            title: "The Ace of Hearts",
            fullplot:
                "A secret society holds a meeting to determine what to do about a powerful and dangerous man whom they have been studying closely for the past three months. They all agree that he deserves to die. Two of the members, Farallone and Forrest, are both in love with Lilith, the group's only female member. But Lilith accepts neither of them, preferring to devote herself to the group's cause. When the group meets again and deals cards to all the members, Forrest draws the ace of hearts, meaning that he will be the one to carry out the assassination. Lilith then suddenly agrees to marry him, in order to give him courage. But after their first night together, both of them begin to feel differently about what they have planned.",
            released: "1924-04-04T00:00:00.000Z",
            writers: ["Gouverneur Morris (by)", "Ruth Wightman (scenario)"],
            awards: [{ wins: 0, nominations: 2, text: "2 nominations." }],
            lastupdated: "2015-07-20 00:01:29.560000000",
            year: 1921,
            imdb: { rating: 7, votes: 798, id: 11904 },
            type: "movie",
            lasupdated: "2020-03-19T23:35:17.330Z",
        },
        {
            tomatoes: {
                viewer: { rating: 3, numReviews: 85, meter: 57 },
                dvd: "2008-08-26T00:00:00.000Z",
                lastUpdated: "2015-08-10T18:33:55.000Z",
            },
            genres: ["Crime", "Drama"],
            cast: ["Jane Gail", "Ethel Grandin", "William H. Turner", "Matt Moore"],
            languages: ["English"],
            directors: ["George Loane Tucker"],
            countries: ["USA"],
            _id: "573a1390f29313caabcd4eaf",
            plot: "A woman, with the aid of her police officer sweetheart, endeavors to uncover the prostitution ring that has kidnapped her sister, and the philanthropist who secretly runs it.",
            runtime: 88,
            num_mflix_comments: 2,
            poster:
                "https://m.media-amazon.com/images/M/MV5BYzk0YWQzMGYtYTM5MC00NjM2LWE5YzYtMjgyNDVhZDg1N2YzXkEyXkFqcGdeQXVyMzE0MjY5ODA@._V1_SY1000_SX677_AL_.jpg",
            title: "Traffic in Souls",
            lastupdated: "2015-09-15 02:07:14.247000000",
            released: "1913-11-24T00:00:00.000Z",
            rated: "TV-PG",
            awards: [{ wins: 1, nominations: 0, text: "1 win." }],
            year: 1913,
            imdb: { rating: 6, votes: 371, id: 3471 },
            type: "movie",
            lasupdated: "2020-03-19T23:35:17.330Z",
        },
        {
            tomatoes: {
                viewer: { rating: 3.4, numReviews: 30, meter: 70 },
                lastUpdated: "2015-06-27T19:17:10.000Z",
            },
            genres: ["Comedy", "Short"],
            cast: ["Harold Lloyd", "Roy Brooks", "Mildred Davis", "Wallace Howe"],
            languages: ["English"],
            directors: ["Hal Roach"],
            countries: ["USA"],
            _id: "573a1391f29313caabcd6d40",
            plot: "A tipsy doctor encounters his patient sleepwalking on a building ledge, high above the street.",
            runtime: 26,
            rated: "PASSED",
            num_mflix_comments: 3,
            poster:
                "https://m.media-amazon.com/images/M/MV5BODliMjc3ODctYjhlOC00MDM5LTgzNmUtMjQ1MmViNDQ0NzlhXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_SY1000_SX677_AL_.jpg",
            title: "High and Dizzy",
            fullplot:
                "After a long wait, a young doctor finally has a patient come to his office. She is a young woman whose father has brought her to be treated for sleep-walking, but the father becomes annoyed with the doctor, and takes his daughter away. Soon afterward, the young doctor shares in a drinking binge with another doctor who has built a still in his office. After a series of misadventures, the two of them wind up in the same hotel where the daughter and her father are staying, leading to some hazardous predicaments.",
            released: "1920-07-11T00:00:00.000Z",
            writers: ["Frank Terry (story)", "H.M. Walker (titles)"],
            awards: [{ wins: 0, nominations: 1, text: "1 nomination." }],
            lastupdated: "2015-08-11 00:35:33.717000000",
            year: 1920,
            imdb: { rating: 7, votes: 646, id: 11293 },
            type: "movie",
            lasupdated: "2020-03-19T23:35:17.331Z",
        },
    ],
    count: 28
} as unknown as MovieResponse;
  const adventureMovies = {
    "data": [{
        "tomatoes": {
            "viewer": {
                "rating": 3.4,
                "numReviews": 6168,
                "meter": 76
            },
            "critic": {
                "rating": 7.9,
                "numReviews": 8,
                "meter": 100
            },
            "dvd": "1999-11-23T00:00:00.000Z",
            "lastUpdated": "2015-07-27T18:39:19.000Z",
            "rotten": 0,
            "production": "Paramount Pictures",
            "fresh": 8
        },
        "genres": ["Adventure", "Fantasy", "Family"],
        "cast": ["George Ali", "Esther Ralston", "Cyril Chadwick", "Mary Brian"],
        "languages": [],
        "directors": ["Herbert Brenon"],
        "countries": ["USA"],
        "_id": "573a1391f29313caabcd7c9e",
        "plot": "Peter Pan enters the nursery of the Darling children and, with the help of fairy dust, leads them off to Never Never Land, where they meet the nefarious Captain Hook.",
        "runtime": 105,
        "num_mflix_comments": 1,
        "poster": "https://m.media-amazon.com/images/M/MV5BODkwOTUxMDkyMV5BMl5BanBnXkFtZTgwOTA1MDQ0MjE@._V1_SY1000_SX677_AL_.jpg",
        "title": "Peter Pan",
        "fullplot": "Peter Pan, the kid who doesn't want to grow up, arrives at the Darling home searching for his shadow. He meets the Darling children and takes them to Never-Never Land, where they will fight against Capt. Hook and his pirate ship and crew. At the end the children will be back in their warm beds.",
        "released": "1924-12-29T00:00:00.000Z",
        "writers": ["J.M. Barrie (play)", "Willis Goldbeck (screenplay)"],
        "awards": [{
            "wins": 1,
            "nominations": 0,
            "text": "1 win."
        }],
        "lastupdated": "2015-08-09 01:05:18.003000000",
        "year": 1924,
        "imdb": {
            "rating": 7.4,
            "votes": 589,
            "id": 15224
        },
        "type": "movie",
        "lasupdated": "2020-03-19T23:35:17.320Z"
    }, {
        "tomatoes": {
            "viewer": {
                "rating": 3.6,
                "numReviews": 659,
                "meter": 70
            },
            "critic": {
                "rating": 8.4,
                "numReviews": 8,
                "meter": 100
            },
            "dvd": "2004-02-03T00:00:00.000Z",
            "lastUpdated": "2015-07-14T18:21:21.000Z",
            "rotten": 0,
            "fresh": 8
        },
        "genres": ["Adventure", "Romance", "Family"],
        "cast": ["Wallace Beery", "Sam De Grasse", "Enid Bennett", "Paul Dickey"],
        "languages": ["English"],
        "directors": ["Allan Dwan"],
        "countries": ["USA"],
        "_id": "573a1391f29313caabcd7626",
        "plot": "A nobleman becomes the vigilante Robin Hood who protects the oppressed English people from the tyrannical Prince John.",
        "runtime": 143,
        "num_mflix_comments": 1,
        "poster": "https://m.media-amazon.com/images/M/MV5BYzRmMWIyNDEtYTRmYS00Y2FlLWJhOGUtYWZmNTI1YzZjOTc2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjUxODE0MDY@._V1_SY1000_SX677_AL_.jpg",
        "title": "Robin Hood",
        "fullplot": "Amid big-budget medieval pageantry, King Richard goes on the Crusades leaving his brother Prince John as regent, who promptly emerges as a cruel, grasping, treacherous tyrant. Apprised of England's peril by message from his lady-love Marian, the dashing Earl of Huntingdon endangers his life and honor by returning to oppose John, but finds himself and his friends outlawed, and Marian apparently dead. Enter Robin Hood, acrobatic champion of the oppressed, laboring to set things right through swash buckling feats and cliffhanging perils!",
        "released": "1922-10-18T00:00:00.000Z",
        "writers": ["Douglas Fairbanks (story)"],
        "awards": [{
            "wins": 1,
            "nominations": 0,
            "text": "1 win."
        }],
        "lastupdated": "2015-08-11 00:29:16.047000000",
        "year": 1922,
        "imdb": {
            "rating": 7.7,
            "votes": 1460,
            "id": 13556
        },
        "type": "movie",
        "lasupdated": "2020-03-19T23:35:17.320Z"
    }, {
        "tomatoes": {
            "viewer": {
                "rating": 3.8,
                "numReviews": 2118,
                "meter": 82
            },
            "critic": {
                "rating": 8.8,
                "numReviews": 13,
                "meter": 100
            },
            "dvd": "2000-05-16T00:00:00.000Z",
            "lastUpdated": "2015-09-15T17:02:33.000Z",
            "rotten": 0,
            "fresh": 13
        },
        "genres": ["Action", "Adventure", "Crime"],
        "cast": ["Musidora", "èdouard Mathè", "Marcel Lèvesque", "Jean Aymè"],
        "languages": ["French"],
        "directors": ["Louis Feuillade"],
        "countries": ["France"],
        "_id": "573a1390f29313caabcd5967",
        "plot": "An intrepid reporter and his loyal friend battle a bizarre secret society of criminals known as The Vampires.",
        "runtime": 399,
        "rated": "NOT RATED",
        "poster": "https://m.media-amazon.com/images/M/MV5BMTc1NTY3NDIzNl5BMl5BanBnXkFtZTgwNTIyODg5MTE@._V1_SY1000_SX677_AL_.jpg",
        "title": "Les vampires",
        "fullplot": "An intrepid reporter and his loyal friend battle a bizarre secret society of criminals known as The Vampires.",
        "released": "1916-11-23T00:00:00.000Z",
        "writers": ["Louis Feuillade"],
        "awards": [{
            "wins": 0,
            "nominations": 1,
            "text": "1 nomination."
        }],
        "lastupdated": "2015-09-02 00:24:27.333000000",
        "year": 1915,
        "imdb": {
            "rating": 6.8,
            "votes": 2878,
            "id": 6206
        },
        "type": "movie",
        "lasupdated": "2020-03-19T23:35:17.326Z"
    }],
    "count": 3
} as unknown as MovieResponse

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MovieService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    httpTestingController.verify();
  }) 

  it('should have baseApiRoute created', () => {
    expect(service.baseApiRoute).toBeTruthy();
  });

  it('should have getAllMovies() created', () => {
    expect(service.getAllMovies).toBeTruthy();
  });

  it('should have getAllMovies() created', () => {
    expect(service.getMoviesByGenre).toBeTruthy();
  });

  describe('getAllMovies()', () => {
    it('should return an response data array containing all the movies and a count of them', () => {
      service.getAllMovies().subscribe((response) => {
        expect(response).toBe(movies);
      });

      const request = httpTestingController.expectOne(baseApiRoute);

      expect(request.request.method).toBe('GET');

      request.flush(movies);
    });
  })

  describe('getMoviesByGenre()', () => {

    it('should return an response data array containing the movies by genre and a count of them', () => {
      service.getMoviesByGenre('Adventure').subscribe((response) => {
        console.log(response)
        expect(response).toBe(adventureMovies);
      });

      const request = httpTestingController.expectOne(baseApiRoute + 'Adventure');

      expect(request.request.method).toBe('GET');

      request.flush(adventureMovies);
    });
  })
 

  
});
