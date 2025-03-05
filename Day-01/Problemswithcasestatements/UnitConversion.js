const args = process.argv.slice(2);
const choice = parseInt(args[0], 10);
const value = parseFloat(args[1]);

switch (choice) {
    case 1:
        console.log(`${value} Feet = ${value * 12} Inches`);
        break;
    case 2:
        console.log(`${value} Feet = ${value * 0.3048} Meters`);
        break;
    case 3:
        console.log(`${value} Inches = ${value / 12} Feet`);
        break;
    case 4:
        console.log(`${value} Meters = ${value / 0.3048} Feet`);
        break;
    default:
        console.log("Invalid choice. Please enter:");
        console.log("1: Feet to Inch");
        console.log("2: Feet to Meter");
        console.log("3: Inch to Feet");
        console.log("4: Meter to Feet");
}
