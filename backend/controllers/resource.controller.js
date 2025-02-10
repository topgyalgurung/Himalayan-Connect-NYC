import { Prisma, PrismaClient } from '@prisma/client';
import getCoordinates from '../utils/geocode.js';

const prisma = new PrismaClient();

// Create a new resource with geolocation
const registerResource = async (req,res) => {
    const { name, description, address, city, state, zipcode, openingDay, openingTime, closingTime, categoryId, addedByUserId } = req.body;

    try {
      const fullAddress = `${address}, ${city}, ${state}, ${zipcode}`;
      const coordinates = await getCoordinates(fullAddress);
  
      if (!coordinates) {
        return res.status(400).json({ error: "Invalid address, could not fetch coordinates" });
      }
  
      const newResource = await prisma.$executeRaw`
        INSERT INTO "Resources" 
        ("name", "description", "address", "city", "state", "zipcode", "latitude", "longitude", "location", "opening_day", "opening_time", "closing_time", "category_id", "added_by_user_id", "created_at", "updated_at")
        VALUES (
          ${name}, ${description}, ${address}, ${city}, ${state}, ${zipcode},
          ${coordinates.latitude}, ${coordinates.longitude}, 
          ST_SetSRID(ST_MakePoint(${coordinates.longitude}, ${coordinates.latitude}), 4326),
          ${openingDay}, ${openingTime}, ${closingTime}, ${categoryId}, ${addedByUserId}, NOW(), NOW()
        )
      `;
  
      res.status(201).json({ message: "Resource added successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error creating resource" });
    }

    
}
/** 

router.get("/", async (req, res) => {
    try {
      const resources = await prisma.resource.findMany({
        select: {
          id: true,
          name: true,
          address: true,
          city: true,
          state: true,
          zipcode: true,
          latitude: true,
          longitude: true
        }
      });
  
      res.json(resources);
    } catch (error) {
      res.status(500).json({ error: "Error fetching resources" });
    }
  });





router.get("/nearby", async (req, res) => {
    const { latitude, longitude, radius = 5000 } = req.query; // Radius in meters
  
    if (!latitude || !longitude) {
      return res.status(400).json({ error: "Latitude and longitude are required" });
    }
  
    try {
      const resources = await prisma.$queryRaw`
        SELECT *, ST_DistanceSphere(
          location, 
          ST_SetSRID(ST_MakePoint(${longitude}::float, ${latitude}::float), 4326)
        ) AS distance 
        FROM "Resources"
        WHERE ST_DistanceSphere(
          location, 
          ST_SetSRID(ST_MakePoint(${longitude}::float, ${latitude}::float), 4326)
        ) <= ${radius}
        ORDER BY distance ASC
      `;
  
      res.json(resources);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error fetching nearby resources" });
    }
  });

  */

export {registerResource}