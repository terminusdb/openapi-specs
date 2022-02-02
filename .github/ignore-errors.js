function shouldIgnoreError (error) {
  // See <https://github.com/terminusdb/openapi-specs/issues/3>.
  if (/DELETE operations cannot have a requestBody/m.test(error.message)) {
    console.error('NOTE! Ignoring this error:', error.message)
    return true
  }
  return false
}

module.exports = shouldIgnoreError
