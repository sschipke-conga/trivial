export const fetchQuestions = async (amount, category, difficulty) => {
  let url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
  const res = await fetch(url);
  if (!res.ok) {
    throw Error('Failed to fetch')
  }
  const data = await res.json()
  return data.results
}
