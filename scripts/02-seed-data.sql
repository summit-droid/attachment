-- Insert sample tours
INSERT INTO tours (name, description, location, category, start_date, end_date, duration_days, price, capacity, image_url, status) VALUES
('Mountain Trek Adventure', 'Experience the breathtaking beauty of the Swiss Alps with our guided mountain trek adventure.', 'Swiss Alps, Switzerland', 'adventure', '2025-05-15', '2025-05-22', 7, 1299.00, 12, '/images/mountain-trek.jpg', 'active'),
('Tropical Beach Retreat', 'Relax and rejuvenate on the pristine beaches of Bali with our all-inclusive tropical retreat.', 'Bali, Indonesia', 'leisure', '2025-06-10', '2025-06-17', 7, 1599.00, 20, '/images/beach-retreat.jpg', 'active'),
('Historic City Explorer', 'Discover the rich history and culture of Rome with expert guides and exclusive access.', 'Rome, Italy', 'cultural', '2025-05-20', '2025-05-25', 5, 1199.00, 15, '/images/cultural-tour.jpg', 'active'),
('African Safari Experience', 'Witness the incredible wildlife of Africa in their natural habitat on this unforgettable safari.', 'Serengeti, Tanzania', 'wildlife', '2025-07-05', '2025-07-15', 10, 2899.00, 8, '/images/safari-tour.jpg', 'active'),
('European City Hopping', 'Explore three iconic European cities in one amazing journey with guided tours and free time.', 'Paris, London, Amsterdam', 'cultural', '2025-08-01', '2025-08-13', 12, 2199.00, 25, '/images/city-tour.jpg', 'active'),
('Adventure Sports Package', 'Get your adrenaline pumping with bungee jumping, skydiving, and white-water rafting.', 'Queenstown, New Zealand', 'adventure', '2025-09-10', '2025-09-16', 6, 1899.00, 10, '/images/adventure-package.jpg', 'active');

-- Insert sample customers
INSERT INTO customers (name, email, phone, address) VALUES
('John Doe', 'john.doe@example.com', '+1 (555) 123-4567', '123 Main St, New York, NY 10001'),
('Sarah Davis', 'sarah.davis@example.com', '+1 (555) 234-5678', '456 Oak Ave, Los Angeles, CA 90210'),
('Robert Johnson', 'robert.j@example.com', '+1 (555) 345-6789', '789 Pine St, Chicago, IL 60601'),
('Emily Wilson', 'emily.w@example.com', '+1 (555) 456-7890', '321 Elm St, Miami, FL 33101'),
('Michael Brown', 'michael.b@example.com', '+1 (555) 567-8901', '654 Cedar Ave, Seattle, WA 98101');

-- Insert sample bookings (we'll use the tour and customer IDs from the inserted data)
INSERT INTO bookings (booking_number, tour_id, customer_id, guests, total_amount, status, payment_status, notes)
SELECT 
  'BK-' || EXTRACT(EPOCH FROM NOW())::bigint + ROW_NUMBER() OVER(),
  t.id,
  c.id,
  CASE 
    WHEN ROW_NUMBER() OVER() = 1 THEN 3
    WHEN ROW_NUMBER() OVER() = 2 THEN 2
    WHEN ROW_NUMBER() OVER() = 3 THEN 4
    WHEN ROW_NUMBER() OVER() = 4 THEN 1
    ELSE 2
  END as guests,
  CASE 
    WHEN ROW_NUMBER() OVER() = 1 THEN t.price * 3
    WHEN ROW_NUMBER() OVER() = 2 THEN t.price * 2
    WHEN ROW_NUMBER() OVER() = 3 THEN t.price * 4
    WHEN ROW_NUMBER() OVER() = 4 THEN t.price * 1
    ELSE t.price * 2
  END as total_amount,
  CASE 
    WHEN ROW_NUMBER() OVER() = 3 THEN 'pending'
    WHEN ROW_NUMBER() OVER() = 5 THEN 'cancelled'
    ELSE 'confirmed'
  END as status,
  CASE 
    WHEN ROW_NUMBER() OVER() = 3 THEN 'unpaid'
    WHEN ROW_NUMBER() OVER() = 5 THEN 'refunded'
    ELSE 'paid'
  END as payment_status,
  CASE 
    WHEN ROW_NUMBER() OVER() = 1 THEN 'Vegetarian meals requested'
    WHEN ROW_NUMBER() OVER() = 4 THEN 'Celebrating anniversary'
    ELSE NULL
  END as notes
FROM 
  (SELECT id, price FROM tours LIMIT 5) t
CROSS JOIN 
  (SELECT id FROM customers LIMIT 5) c
WHERE 
  ROW_NUMBER() OVER() <= 5;
