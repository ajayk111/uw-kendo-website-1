import { addRoutine } from "../functions/utils"

export const baseMap = {
   "2020-12-23": [
      {
         "start": "7:00 PM",
         "end": "9:00 PM",
         "name": "Kendo Practice",
         "location": "IMA Gym B"
      }
   ],
   "2020-12-25": [
      {
         "start": "7:00 PM",
         "end": "9:00 PM",
         "name": "Kendo Practice",
         "location": "IMA Studio 216"
      }
   ],
   "2020-12-30": [
      {
         "start": "9:00 AM",
         "end": "10:00 AM",
         "name": "Desert Celebration",
         "location": "zoom"
      },
      {
         "start": "7:00 PM",
         "end": "9:00 PM",
         "name": "Kendo Practice",
         "location": "IMA Gym B"
      }
   ],
   "2021-01-01": [
      {
         "start": "7:00 PM",
         "end": "9:00 PM",
         "name": "Kendo Practice",
         "location": "IMA Gym B"
      },
      {
         "start": "9:00 AM",
         "end": "10:00 AM",
         "name": "New Year Celebration",
         "location": "zoom"
      }
   ],
   "2021-01-05": [
      {
         "start": "1:00 PM",
         "end": "2:00 PM",
         "name": "Kendo Web Check-in",
         "location": "zoom"
      }
   ],
}

export const calendarMap = {
   ...baseMap,
   ...addRoutine(baseMap, "2021-01-04", "2021-03-13")
}