import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";

import * as L from "leaflet";
import { DialogInformationsComponent } from "../dialog-informations/dialog-informations.component";
import { PlacesService } from "../places.service";
import { StartDialogInformationsComponent } from "../start-dialog-informations/start-dialog-informations.component";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"],
})
export class MapComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private placesService: PlacesService
  ) {}
  ngOnInit(): void {
    this.initMap();
    this.openStartDialog()
  }
  private map;
  selectedValue: string;
  alertMessage =
    "Veuillez appuier sur le lieu afin de voir plus d'informations";
  alertMessageHidden = true;
  places: any = [
    { value: "Des Restaurants" },
    { value: "Des Cinémas" },
    { value: "Des Night Clubs" },
    { value: "Des Theatres" },
    { value: "Des Clubs de Sport" },
    { value: "Des Jardin" },
    { value: "Des Piscines" },
  ];
  private initMap(): void {
    this.map = L.map("map", {
      center: [48.8534, 2.3488],
      zoom: 12,
    });
    const tiles = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
  }

  search(arrOfPlaces: any, iconUrl: string) {
    this.map.remove();
    this.initMap();
    let usedIcon = L.icon({
      iconUrl: iconUrl,
      iconSize: [38, 38],
    });
    for (let x of arrOfPlaces) {
      L.marker([x.latitude, x.longitude], { icon: usedIcon })
        .on("click", this.openDialog.bind(this, x))
        .addTo(this.map);
    }
    this.alertMessageHidden = false;
  }

  searchPlace() {
    switch (this.selectedValue) {
      case this.places[0].value:
        this.search(
          this.placesService.restaurants,
          "assets/placesIcons/restaurant.png"
        );
        break;
      case this.places[1].value:
        this.search(
          this.placesService.cinemas,
          "assets/placesIcons/cinema.png"
        );
        break;
      case this.places[2].value:
        this.search(
          this.placesService.nightClubs,
          "assets/placesIcons/nightClub.png"
        );
        break;
      case this.places[3].value:
        this.search(
          this.placesService.theatres,
          "assets/placesIcons/thearte.png"
        );
        break;
      case this.places[4].value:
        this.search(
          this.placesService.sportClubs,
          "assets/placesIcons/gym.png"
        );
        break;
      case this.places[5].value:
        this.search(this.placesService.jardins, "assets/placesIcons/parc.png");
        break;
      case this.places[6].value:
        this.search(this.placesService.piscines, "assets/placesIcons/pool.png");
        break;
      default:
        break;
    }
  }
  refresh() {
    this.alertMessageHidden = true;
    this.selectedValue = "";
    this.map.remove();
    this.initMap();
  }
  openDialog(p): any {
    const dialogRef = this.dialog.open(DialogInformationsComponent, {
      data: {
        place: p,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  openStartDialog(): any {
    const dialogRef = this.dialog.open(StartDialogInformationsComponent, {
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
