# Unit Converter

A simple React web application for converting units of measurement. This project allows users to input a value, select units to convert from and to, and view the converted result across various types of measurements like length, weight, and temperature.

Project Task URL: https://roadmap.sh/projects/unit-converter

This solution is based on the task-tracker [challenge](https://roadmap.sh/projects/unit-converter) from [roadmap.sh](https://roadmap.sh/).

## Features

- **Unit Conversion**: Convert values between different units of measurement (e.g., length, weight, temperature).
- **Responsive UI**: User-friendly design with input fields and dropdowns for selecting units.
- **Live Result**: Automatically updates the converted value as the user inputs data.
- **Support for Multiple Categories**: Includes length, weight, and temperature conversions.
  
## Supported Units
- **Length**: millimeter, centimeter, meter, kilometer, inch, foot, yard, mile.
- **Weight**: milligram, gram, kilogram, ounce, pound, tonne, stone, US ton, imperial ton.
- **Temperature**: Celsius, Fahrenheit, Kelvin.

## Installation

To run this application, follow these steps:

1. Clone this repository:
    ```bash
    git clone https://github.com/damonsahil26/UnitConverter.git
    ```

2. Navigate to the project directory:
    ```bash
    cd UnitConverter
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the application:
    ```bash
    npm run dev
    ```

The application will run at `http://localhost:5173/` by default.

## Usage

Once the application is running, you can enter a value to convert and select the units for conversion. The converted value will be displayed automatically as you make selections.

### Example Usage

1. Enter the value to convert.
2. Select the category (Length, Weight, Temperature).
3. Choose the "Convert From" and "Convert To" units from the dropdown menus.
4. The converted value will be displayed immediately below.

### Example:

```bash
Input: 10 meters
Convert From: Meter
Convert To: Kilometer

Output: 0.01 kilometers
