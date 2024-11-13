// Predefined data structure for bikes and cars with brands and models
const vehicleData = {
    categories: {
      Bikes: {
        Geared: {
          Hero: ['Splendor Plus', 'Passion Pro', 'Glamour', 'Xpulse 200'],
          Bajaj: ['Pulsar 150', 'Pulsar NS200', 'Pulsar 220F', 'Dominar 400'],
          Honda: ['CB Shine', 'Unicorn', 'SP 125', 'Hornet 2.0'],
          // Add more brands and models for Geared Bikes
        },
        'Non-geared Scooters': {
          Honda: ['Activa 6G', 'Activa 125', 'Dio', 'Grazia 125'],
          TVS: ['Jupiter', 'Ntorq 125', 'Scooty Pep Plus'],
          Hero: ['Pleasure Plus', 'Destini 125', 'Maestro Edge 125'],
          // Add more brands and models for Non-geared Scooters
        },
      },
      Cars: {
        MarutiSuzuki: ['Swift', 'Dzire', 'Baleno', 'WagonR'],
        Hyundai: ['Creta', 'Venue', 'Verna', 'i20'],
        TataMotors: ['Nexon', 'Tiago', 'Tigor', 'Harrier'],
        // Add more car brands and models
      },
    },
  };
  
  // Bike problems and solutions
  const bikeProblems = [
    {
      problem: 'flat tire',
      solution: 'You have a flat tire. You should patch the tire or replace the tube.',
    },
    {
      problem: 'chain fell off',
      solution: 'If your chain fell off, try putting it back on by loosening the rear wheel and sliding it back.',
    },
    {
      problem: 'brakes not working',
      solution: 'Your brakes may need adjustment. Try tightening the brake cables or replacing the brake pads.',
    },
    {
      problem: 'gears not shifting',
      solution: 'Check the derailleur for alignment or adjust the gear cables.',
    },
    // Add more problems and solutions as necessary
  ];
  
  // Function to display categories
  function displayCategories() {
    const categories = Object.keys(vehicleData.categories);
    console.log('Select a category:');
    categories.forEach((category, index) => {
      console.log(`${index + 1}. ${category}`);
    });
    // Logic for user selection will go here
  }
  
  // Function to display brands based on category and type (Geared or Non-geared)
  function displayBrands(category, type) {
    const brands = Object.keys(vehicleData.categories[category][type]);
    console.log(`Select a brand for ${type} in ${category}:`);
    brands.forEach((brand, index) => {
      console.log(`${index + 1}. ${brand}`);
    });
    // Logic for user selection will go here
  }
  
  // Function to display models based on brand selection
  function displayModels(category, type, brand) {
    const models = vehicleData.categories[category][type][brand];
    console.log(`Select a model from ${brand}:`);
    models.forEach((model, index) => {
      console.log(`${index + 1}. ${model}`);
    });
    // Logic for user selection will go here
  }
  
  // Function to prompt user for a problem and provide a solution
  function diagnoseProblem(problem) {
    const problemFound = bikeProblems.find(p => p.problem === problem);
    if (problemFound) {
      console.log(`Problem: ${problemFound.problem}`);
      console.log(`Solution: ${problemFound.solution}`);
    } else {
      console.log('Problem not found. Please check the input.');
    }
  }
  
  // Example flow
  displayCategories(); // Step 1: User selects category (e.g., Bikes)
  displayBrands('Bikes', 'Geared'); // Step 2: User selects brand (e.g., Hero)
  displayModels('Bikes', 'Geared', 'Hero'); // Step 3: User selects model (e.g., Splendor Plus)
  diagnoseProblem('flat tire'); // Step 4: User inputs a problem (e.g., flat tire)
  