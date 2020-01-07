import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tb-top-tourist-locations',
  templateUrl: './top-tourist-locations.component.html',
  styleUrls: ['./top-tourist-locations.component.scss']
})
export class TopTouristLocationsComponent implements OnInit {
  touristLocations = [
    {
      title: 'The Great Blue Hole',
      imagePath: 'http://cdn.cnn.com/cnnnext/dam/assets/181130104319-blue-hole-belize-super-tease.jpg',
      location: 'Located near the Lighthouse Reef, adventure seekers can travel from Ambergris Caye or Belize City.',
      description: `The Great Blue Hole is the most popular diving destination in Belize, offering divers an opportunity to observe bizarre stalactites and limestone formations. The site is a World Heritage Site of the United Nations Educational, Scientific, and Cultural Organization. The massive underwater sinkhole is truly a sight to be seen, creating a perfect circle of deep blue water.`,
      ageRange: 'All the ways to visit the Great Blue Hole really make it a destination for travelers of all ages and abilities.'
    },
    {
      title: 'Caye Caulker',
      imagePath: 'https://lp-cms-production.imgix.net/2019-06/79078159.jpg',
      location: 'Located in the Caribbean Sea, 20 miles north, north-east of Belize City.',
      description: `Caye Caulker has become one of the top tourist destinations in Belize in recent years. A small coral island in the Caribbean Sea, Caye Caulker has an abundance of restaurants and bars. It's cheap prices and laid-back vibe attract backpackers from all over the world.`,
      travelInformation: 'The most common mode of transportation to get to Caye Caulker is water taxi. This takes roughly 45 minutes from Belize City International Airport. Due to the small size of the island, once there, most people walk. Paths are well defined and crossing the island takes about 20 minutes. Bicycles and golf carts are also available to rent.',
      ageRange: 'Guests with mobility issues may find the island difficult to navigate. This destination would best be suited to travelers between the ages of 12-65.'
    },
    {
      title: 'Cockscomb Basin Wildlife Sanctuary & Jaguar Preserve',
      imagePath: 'https://www.belizeaudubon.org/wp-content/uploads/2014/02/bas_cockscomb_basin_6.jpg',
      location: 'The sanctuary is located in the Stann Creek District of south-central Belize.',
      description: `The Cockscomb Basin Wildlife Sanctuary is Belize's most famous jaguar sanctuary. With over 200 square miles, it is also one of the largest protected areas in the country.`,
      travelInformation: 'Cockscomb Basin Wildlife Sanctuary is open daily from 8 AM to 4:30 PM. It costs BZ $10 for non-nationals and only BZ $2.50 for Belize nationals. The sanctuary offers various overnight accommodations on site, including cabin rentals and camp grounds.',
      ageRange: 'All ages will have a good time learning about the nature Belize has to offer.'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
