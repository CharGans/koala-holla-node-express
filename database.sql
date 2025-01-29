CREATE TABLE "koalas" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL,
    "favorite_color" VARCHAR(20),
    "age" INT,
    "ready_to_transfer" BOOLEAN DEFAULT false,
    "notes" TEXT 
);

INSERT INTO "koalas" (name, favorite_color, age, ready_to_transfer, notes) 

VALUES
('Charlie', 'Orange', 5, true, 'Love to climb trees'),
('Kiwi', 'Pink', 2000, false, 'eats stickers'),
('Paul', 'Blue', 6, false, 'eats Kiwi'),
('Cornelius', 'neon blue', 63, true, 'scared of paul');

SELECT * FROM "koalas";