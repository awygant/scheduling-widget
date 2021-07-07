export const SERVICES_DUMMY_DATA = {
  "data": [
    {
      "id": "3866",
      "type": "cptCodes",
      "links": {
        "self": "https://johnny-appleseed.clientsecure.me/client-portal-api/cpt-codes/3866"
      },
      "attributes": {
        "description": "Psychiatric Diagnostic Evaluation",
        "duration": 50,
        "rate": "100.0",
        "callToBook": "false"
      }
    },
    {
      "id": "31822614",
      "type": "cptCodes",
      "links": {
        "self": "https://johnny-appleseed.clientsecure.me/client-portal-api/cpt-codes/31822614"
      },
      "attributes": {
        "description": "Intro Call",
        "duration": 15,
        "rate": "0.0",
        "callToBook": "false"
      }
    }
  ],
  "links": {
    "first": "https://johnny-appleseed.clientsecure.me/client-portal-api/cpt-codes?page%5Bnumber%5D=1&page%5Bsize%5D=10",
    "last": "https://johnny-appleseed.clientsecure.me/client-portal-api/cpt-codes?page%5Bnumber%5D=1&page%5Bsize%5D=10"
  }
};

export const LOCATIONS_DUMMY_DATA = {
  "data": [
    {
      "id": "8377723",
      "type": "offices",
      "links": {
        "self": "https://johnny-appleseed.clientsecure.me/client-portal-api/offices/8377723"
      },
      "attributes": {
        "name": "Video Office",
        "phone": "(626) 298-1956",
        "isVideo": true,
        "geolocation": {
          "lat": "0.0",
          "lng": "0.0"
        },
        "isPublic": false
      }
    }
  ],
  "links": {
    "first": "https://johnny-appleseed.clientsecure.me/client-portal-api/offices?page%5Bnumber%5D=1&page%5Bsize%5D=10",
    "last": "https://johnny-appleseed.clientsecure.me/client-portal-api/offices?page%5Bnumber%5D=1&page%5Bsize%5D=10"
  }
};
