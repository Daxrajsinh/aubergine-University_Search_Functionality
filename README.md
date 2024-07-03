# University Search Functionality

This application provides a user-friendly interface to search and display details of universities based on selected country and state/province. Users can also download specific university cards as JPEG images.

## Repository

API Repository: [University Domains List](https://github.com/Hipo/university-domains-list)

For further details on the API, refer to the [API Documentation](https://github.com/Hipo/university-domains-list#2---using-the-hosted-api).

## Technologies used:
- React.js && CSS

## Tasks

### Level 1: Basic Search Functionality

#### 1. Search by Country

- Implement a search functionality to filter and display universities based on the selected country.

#### UI Instructions

- **Country Input Field:** Create a text input field where users can enter the country name.
- **University Cards:** Display university cards showing the university name with a link to their website below the input field.

### Level 2: Enhanced Search with Province Filtering

#### 1. State/Province Dropdown

- After selecting a country, populate a dropdown with unique state/province values from the university data of that specific country.

#### 2. Filter by Province

- Upon selecting a state/province from the dropdown, update the displayed cards to show universities only from that state/province.

#### UI Instructions

- **Dropdown:** Dynamically populate a dropdown menu with state/province names after a country is entered.
- **Updated University Cards:** Update the cards to display universities from the selected state/province, including links to their websites.

### Level 3: Download the University Card as a JPEG

#### 1. Download Functionality

- Allow users to download any specific university card as a JPEG image.

#### UI Instructions

- Implement the download functionality in a suitable manner to enable users to download university cards as JPEG images.

## Implementation Details

- The application utilizes the University Domains List API to fetch university data.
- Frontend is built using React, and CSS for interactive user interface and functionality.
- Backend interactions are handled via API calls to fetch and filter university data based on user selections.

## Setup Instructions
```bash
  cd <project-directory>
  npm run start
```
