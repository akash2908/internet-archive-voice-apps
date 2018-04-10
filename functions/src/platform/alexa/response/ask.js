/**
 * create alexa.ask wrapper
 *
 * @param alexa
 */
module.exports = (alexa) =>
  /**
   * Response with question
   *
   * @param speech {String}
   * @param suggestions {Array}
   */
  ({speech, suggestions}) => {
    if (!Array.isArray(speech)) {
      speech = [speech];
    }
    speech = speech.join('\n');
    alexa.response.speak(speech).listen(speech);
  };
