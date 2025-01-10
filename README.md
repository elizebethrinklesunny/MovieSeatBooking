# React + Vite

Technologies Used
React: Frontend framework.
Vite: Project setup.
Styling : CSS/Bootstrap  .
Hooks: useState for state management.
Optional: Redux for advanced state management.

Features
1. Seat Layout
Displays a grid of seats (e.g., 6 rows x 10 seats per row).
Each seat has a unique identifier (e.g., "A1", "A2", ..., "F10").
Seats are color-coded based on their pricing tiers:
Silver (Front Rows): ₹100
Gold (Middle Rows): ₹150
Platinum (Back Rows): ₹200
Seats are clickable to select or deselect.


2. Dynamic Pricing
Displays the price of the seat upon selection.
Updates the total cost in real time as seats are selected or deselected.


3. Booking Summary
Shows a summary of selected seats and their respective prices.
Displays the total cost of the selected seats.
Includes a "Book Now" button that displays a confirmation message .


4. Constraints
Users can select a maximum of 8 seats.
Displays an error message if more than 8 seats are selected (e.g., "You can only select up to 8 seats").

5. State Management
Utilizes React's useState  for state management.
Optionally supports  Redux for advanced state management .



