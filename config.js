var config = {
    style: 'mapbox://styles/erinreiss/cll0zchiy00qp01p08htoawl1',
    accessToken: 'pk.eyJ1IjoiZXJpbnJlaXNzIiwiYSI6ImNqOG84NWlnMDAwZnkyd3VtdnF4M2loNnkifQ.wpD0CzpyEpI2Pda7sVhGtw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Transit Deserts of NYC',
    subtitle: 'An amazing, eazy to follow final class for stsudents of Lede',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'step-one',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
            description: 'New York City. The Big Apple. The City So Nice They Named it Twice. A huge city with a population of over 8 million across the five boroughs.',
            location: {
                center: [-74.04, 40.74],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'step-two',
            alignment: 'left',
            hidden: false,
            title: 'Subways Turn On',
            image: 'subway.png',
            description: 'That is a massive amount of New Yorkers that need to get around: to and from work, school, home, family, and fun.<br><br>Luckily, NYC is a city famous for its far reaching, 24-hour subway system.',
            location: {
                center: [-74.04, 40.74],
                zoom: 10,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer:'subwaysMB',
                    opacity:1,
                    duration:2000
                },
                {
                    layer:'walkShedMB',
                    opacity:0,
                    duration:500
                }
            ],
            onChapterExit: []
        },
        {
            id: 'step-three',
            alignment: 'left',
            hidden: false,
            title: 'Walkshed Turn On',
            image: '',
            description: 'However... While the official subway map makes it seem like the subway goes everywhere, there are actually large parts of the five boroughs (here, marked in red) that are more than a 15 minute walk from the nearest subway stations. The large red areas on this map represent "transit deserts" — large areas where residents do not have easy access to the subway system that is supposed to serve all of New York.',
            location: {
                center: [-74.04, 40.74],
                zoom: 10,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer:'walkShedMB',
                    opacity:1,
                    duration:2000
                }
            ],
            onChapterExit: []
        },
        {
            id: 'step-four',
            alignment: 'fully',
            hidden: false,
            title: 'Zoom to south Brooklyn',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-73.94, 40.61],
                zoom: 11.5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'step-five',
            alignment: 'fully',
            hidden: false,
            title: 'Zoom to East QNS',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-73.81, 40.7],
                zoom: 11.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
