import React, { useState, useEffect } from 'react';
import './style.css';

function Seatbooking() {
  const rows = 6;
  const cols = 10;
  const seatPricing = {
    silver: 100,
    gold: 150,
    platinum: 200,
  };

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const generateSeats = () => {
    const seats = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 1; col <= cols; col++) {
        const id = `${String.fromCharCode(65 + row)}${col}`;
        const tier =
          row < 2 ? 'silver' : row < 4 ? 'gold' : 'platinum';
        seats.push({ id, tier, price: seatPricing[tier] });
      }
    }
    return seats;
  };

  const seats = generateSeats();

  const toggleSeatSelection = (seat) => {
    if (selectedSeats.includes(seat.id)) {
      setSelectedSeats((prev) => prev.filter((id) => id !== seat.id));
      setTotalCost((prev) => prev - seat.price);
    } else {
      if (selectedSeats.length < 8) {
        setSelectedSeats((prev) => [...prev, seat.id]);
        setTotalCost((prev) => prev + seat.price);
      } else {
        alert('You can only select up to 8 seats');
      }
    }
  };

  const handleConfirmBooking = () => {
    setShowModal(false);
    alert('Booking Confirmed!');
  };
console.log("selectedSeats",selectedSeats)
console.log("showModal",showModal)
  return (
    <div className="container mt-4">
      <h1 className="text-center">Seat Booking</h1>
      <div className="screen">Screen</div>

      <div className="seat-layout mt-4">
        {/* Silver Tier */}
        <div className="tier-section">
          <h5 className="text-center">Silver Seats - ₹{seatPricing.silver}</h5>
          {Array.from({ length: 2 }).map((_, rowIndex) => (
            <div className="d-flex justify-content-center mb-2" key={`silver-${rowIndex}`}>
              {Array.from({ length: cols }).map((_, colIndex) => {
                const seat = seats[rowIndex * cols + colIndex];
                return (
                  <button
                    key={seat.id}
                    className={`btn mx-1 ${selectedSeats.includes(seat.id)
                      ? 'btn-success'
                      : 'btn-secondary'
                      }`}
                    style={{ width: '50px' }}
                    onClick={() => toggleSeatSelection(seat)}
                  >
                    {seat.id}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Gold Tier */}
        <div className="tier-section mt-4">
          <h5 className="text-center">Gold Seats - ₹{seatPricing.gold}</h5>
          {Array.from({ length: 2 }).map((_, rowIndex) => (
            <div className="d-flex justify-content-center mb-2" key={`gold-${rowIndex}`}>
              {Array.from({ length: cols }).map((_, colIndex) => {
                const seat = seats[(rowIndex + 2) * cols + colIndex];
                return (
                  <button
                    key={seat.id}
                    className={`btn mx-1 ${selectedSeats.includes(seat.id)
                      ? 'btn-success'
                      : 'btn-warning'
                      }`}
                    style={{ width: '50px' }}
                    onClick={() => toggleSeatSelection(seat)}
                  >
                    {seat.id}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Platinum Tier */}
        <div className="tier-section mt-4">
          <h5 className="text-center">Platinum Seats - ₹{seatPricing.platinum}</h5>
          {Array.from({ length: 2 }).map((_, rowIndex) => (
            <div className="d-flex justify-content-center mb-2" key={`platinum-${rowIndex}`}>
              {Array.from({ length: cols }).map((_, colIndex) => {
                const seat = seats[(rowIndex + 4) * cols + colIndex];
                return (
                  <button
                    key={seat.id}
                    className={`btn mx-1 ${selectedSeats.includes(seat.id)
                      ? 'btn-success'
                      : 'btn-danger'
                      }`}
                    style={{ width: '50px' }}
                    onClick={() => toggleSeatSelection(seat)}
                  >
                    {seat.id}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="summary mt-4">
        <button
          className="btn btn-primary"
          disabled={selectedSeats.length === 0}
          onClick={() => {
            if (selectedSeats.length > 0) {
              setShowModal(true); // Show modal only if seats are selected
            } else {
              setShowModal(false); // Ensure modal remains hidden if no seats are selected
              alert('Please select at least one seat to proceed!'); // Optional alert for user feedback
            }
          }}
        >
          {totalCost ? `Pay Rs.${totalCost}` : 'Book Now'}
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h4>Booking Summary</h4>
            <p><strong>Selected Seats:</strong> {selectedSeats.join(', ') || 'None'}</p>
            <p><strong>Total Cost:</strong> ₹{totalCost}</p>
            <div className="d-flex justify-content-between mt-4">
              <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="btn btn-success" onClick={handleConfirmBooking}>Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Seatbooking;
