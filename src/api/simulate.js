const sleep = () => new Promise(resolve => setTimeout(resolve, 5000));

/**
 * Simulates if an api call is valid
 * @param {*} data 
 * @returns 
 */
export const valid = async (data) => {
  const body = {status: 200, form: data}
  await sleep()
  console.log('after sleep')
  const x = new Promise((resolve, reject) => resolve(body))
  const r = await x
  console.log(r)
  return new Promise((resolve, reject) => resolve(r))
}
/**
 * Simulates if an api call gives back an error
 * @returns 
 */
export const inValid = async () => {
  const body = {status: 500}
  await sleep()
  console.log('after sleep')
  return new Promise((resolve, reject) => reject(body))
}