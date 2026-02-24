export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Chloe Kim";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "cnk2024";
  }

  // if (query.toLowerCase().includes("Which of the following numbers is the largest: ")) {
  //   let numbers = query.split(" ");
  //   return Math.max(parseInt(numbers[-1]), parseInt(numbers[-2]), parseInt(numbers[-1])).toString()
  // }

  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("plus")) {
    let numbers = query.replace("?", "").split(" ");
    return (parseInt(numbers[2]) + parseInt(numbers[4])).toString()
  }

  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("multiplied by")) {
    let numbers = query.replace("?", "").split(" ");
    return (parseInt(numbers[2]) * parseInt(numbers[4])).toString()
  }

  return "";
}
