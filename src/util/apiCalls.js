export const fetchQuestions = async (amount, category, difficulty) => {
  let url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
  console.log('url', url)
  const res = await fetch(url);
  if (!res.ok) {
    throw Error('Failed to fetch')
  }
  const data = await res.json()
  console.log(data.results)
  return data.results
}
