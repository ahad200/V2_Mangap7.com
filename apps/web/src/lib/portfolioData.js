
/* 
 * GOOGLE DRIVE IMAGE INTEGRATION GUIDE
 * ------------------------------------
 * To use images hosted on Google Drive, you must use the direct export link format.
 * 
 * 1. Upload your image to Google Drive and set general access to "Anyone with the link".
 * 2. Copy the link. It will look like: https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing
 * 3. Extract the YOUR_FILE_ID part.
 * 4. Replace the image URL below with: https://drive.google.com/uc?export=view&id=YOUR_FILE_ID
 * 
 * Example:
 * image: "https://drive.google.com/uc?export=view&id=1A2B3C4D5E6F7G8H9I0J"
 * 
 * Test Image ID in use: 1FzN2zDazQz2XYiGQx47zzp8-Hl03XZhc
 */


export const portfolioData = {
  Analog: {
    coverImage: "https://drive.google.com/uc?export=view&id=1rgqhsgf0NIWl3SQlfvMwqzi39UgpSjCi",
    photos: [
      {
        id: "d-1",
        image: "https://drive.google.com/uc?export=view&id=1P2e6BOG8H2wJdToR3pu62fdxo73hqX2x",
        title: "Misty Peaks",
        description: "Early morning fog lifting from the valley",
        metadata: "Fujinon 35mm · f/8 · 1/100s · ISO 400"
      },
      {
        id: "d-2",
        image: "https://drive.google.com/uc?export=view&id=1BWgjS_pRgrNv75zmEZleom_4rDdsPTZa",
        title: "Forest Canopy",
        description: "Top-down view of the autumn woods",
        metadata: "Fujinon 35mm · f/8 · 1/100s · ISO 200"
      },
      {
        id: "d-3",
        image: "https://drive.google.com/uc?export=view&id=1SDK6AQC39lCANfMyWvN1clbvP8YjhQaW",
        title: "Coastal Geometry",
        description: "Waves crashing against the geometric rock formations",
        metadata: "Fujinon 35mm · f/8 · 1/100s · ISO 200"
      },
      {
        id: "d-4",
        image: "https://drive.google.com/uc?export=view&id=1rgqhsgf0NIWl3SQlfvMwqzi39UgpSjCi",
        title: "Coastal Geometry",
        description: "Waves crashing against the geometric rock formations",
        metadata: "Fujinon 35mm · f/8 · 1/100s · ISO 200"
      },
      {
        id: "d-5",
        image: "https://drive.google.com/uc?export=view&id=1l7ibqYr2sN2PCFp8dcMoz2qMq_x9v25x",
        title: "Coastal Geometry",
        description: "Waves crashing against the geometric rock formations",
        metadata: "Fujinon 35mm · f/8 · 1/100s · ISO 400"
      },
      {
        id: "d-6",
        image: "https://drive.google.com/uc?export=view&id=1g6LIO1ISS8y9QbyPSdX55L9fKdA3-eux",
        title: "Coastal Geometry",
        description: "Waves crashing against the geometric rock formations",
        metadata: "Fujinon 35mm · f/8 · 1/100s · ISO 400"
      }
    ]
  },
  Sport: {
    coverImage: "https://drive.google.com/uc?export=view&id=1LlYgjcVn7PGLk1rimNB6b6tGCRD7SEMf",
    photos: [
      {
        id: "s-1",
        image: "https://drive.google.com/uc?export=view&id=1LlYgjcVn7PGLk1rimNB6b6tGCRD7SEMf",
        title: "The Final Sprint",
        description: "Track and field athletes pushing their limits",
        metadata: "200mm · f/2.8 · 1/2000s"
      },
      {
        id: "s-2",
        image: "https://drive.google.com/uc?export=view&id=174mK3JDj1BsBoDNgyEFfCU_weSAkpyDk",
        title: "Urban Motion",
        description: "Parkour athlete mid-air in the downtown district",
        metadata: "35mm · f/2.8 · 1/1000s"
      },
      {
        id: "s-3",
        image: "https://drive.google.com/uc?export=view&id=1svMB5A6_etn7tS48fLQBfTHSKflEKOdZ",
        title: "Morning Training",
        description: "Solitary rowing practice at dawn",
        metadata: "85mm · f/4.0 · 1/800s"
      },
      {
        id: "s-4",
        image: "https://drive.google.com/uc?export=view&id=1zq4pAzRqX2ZqrVvTiYB3ejSs_dEfycSt",
        title: "Morning Training",
        description: "Solitary rowing practice at dawn",
        metadata: "85mm · f/4.0 · 1/800s"
      },
      {
        id: "s-5",
        image: "https://drive.google.com/uc?export=view&id=1Agp0j9VaCK2FbmsdvRcJ_MThuxd-9eLo",
        title: "Morning Training",
        description: "Solitary rowing practice at dawn",
        metadata: "85mm · f/4.0 · 1/800s"
      },
      {
        id: "s-6",
        image: "https://drive.google.com/uc?export=view&id=1WyYKBA0k-yWtsc9-jCLrRO9zPA1b8iZO",
        title: "Morning Training",
        description: "Solitary rowing practice at dawn",
        metadata: "85mm · f/4.0 · 1/800s"
      },
      
    ]
  },
  Wedding: {
    coverImage: "https://images.unsplash.com/photo-1700473370106-04f6cc02cbaf",
    photos: [
      {
        id: "w-1",
        image: "https://drive.google.com/uc?export=view&id=1j7B_5hyH88UAafjd_rdouqq03p675tJt",
        title: "The Vows",
        description: "Emotional exchange during the outdoor ceremony",
        metadata: "85mm · f/1.4 · 1/500s"
      },
      {
        id: "w-2",
        image: "https://drive.google.com/uc?export=view&id=1P2e6BOG8H2wJdToR3pu62fdxo73hqX2x",
        title: "Bridal Portrait",
        description: "Classic editorial style portrait in the historic venue",
        metadata: "50mm · f/2.0 · 1/250s"
      },
      {
        id: "w-3",
        image: "https://drive.google.com/uc?export=view&id=1zcVUGJodnE6eWykUAGhvIY8n6A_WrGyp",
        title: "Bridal Portrait",
        description: "Classic editorial style portrait in the historic venue",
        metadata: "50mm · f/2.0 · 1/250s"
      }
    ]
  },
  Drone: {
    coverImage: "https://drive.google.com/uc?export=view&id=1ugd06bOXN1bGQxjbYFv-i6bjzJwvQBD-",
    photos: [
      {
        id: "ws-1",
        image: "https://drive.google.com/uc?export=view&id=1MqKXCx2k_b9RApLpZh2CwjZ7Foxa4g3x",
        title: "Masterclass Setup",
        description: "Behind the scenes of the lighting workshop",
        metadata: "24mm equivalent · 82.1° FOV · f/1.7"
      },
      {
        id: "ws-2",
        image: "https://drive.google.com/uc?export=view&id=1F81ggcrh5l0I2bjKNSZ0-KS_34g5MmBQ",
        title: "Student Focus",
        description: "Attendees practicing macro photography techniques",
        metadata: "24mm equivalent · 82.1° FOV · f/1.7"
      },
      {
        id: "ws-3",
        image: "https://drive.google.com/uc?export=view&id=1SHm-JiPXSMI4GZLBuvUPm1TYzO8u3L7O",
        title: "Field Trip",
        description: "Landscape photography group session at the coast",
        metadata: "24mm equivalent · 82.1° FOV · f/1.7"
      },
      {
        id: "ws-4",
        image: "https://drive.google.com/uc?export=view&id=1CjX4Cb4WSeDVDfWJSiL-HBDbP8jPnXKz",
        title: "Field Trip",
        description: "Landscape photography group session at the coast",
        metadata: "24mm equivalent · 82.1° FOV · f/1.7"
      },
      {
        id: "ws-5",
        image: "https://drive.google.com/uc?export=view&id=14VylvV60SRlzFguKhKwa6Huz1rPZqfQ3",
        title: "Field Trip",
        description: "Landscape photography group session at the coast",
        metadata: "24mm equivalent · 82.1° FOV · f/1.7"
      },
      {
        id: "ws-6",
        image: "https://drive.google.com/uc?export=view&id=1ugd06bOXN1bGQxjbYFv-i6bjzJwvQBD-",
        title: "Field Trip",
        description: "Landscape photography group session at the coast",
        metadata: "24mm equivalent · 82.1° FOV · f/1.7"
      }
    ]
  },
  MusicEvent: {
    coverImage: "https://drive.google.com/uc?export=view&id=1y0rQLNh-vU5Xs10XRP4FxtIiO1FaSQxK",
    photos: [
      {
        id: "m-1",
        image: "https://images.unsplash.com/photo-1612724094849-9ae3324cf216",
        title: "Main Stage Energy",
        description: "Capturing the crowd's reaction during the headline set",
        metadata: "50mm · f/1.8 · 1/200s"
      },
      {
        id: "m-2",
        image: "https://images.unsplash.com/photo-1654948225465-7bb3bb526a37",
        title: "Acoustic Intimacy",
        description: "Quiet moments backstage before the performance",
        metadata: "35mm · f/1.4 · 1/125s"
      },
      {
        id: "m-3",
        image: "https://images.unsplash.com/photo-1691611737031-45cca28b183e",
        title: "Neon Rhythms",
        description: "Dynamic lighting at the electronic music festival",
        metadata: "85mm · f/2.0 · 1/500s"
      }
    ]
  },
};
