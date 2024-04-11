"""Madlibs Stories."""



class VacationPlan:
    """Dream Vacation Plan.

    To make a vacation plan, pass a list of prompts, and the text
    of the template.

        >>> plan = VacationPlan(["destination", "activity", "travel_month", "duration_days"],
        ...     "Get ready for your dream vacation in {destination}! You will spend {duration_days} days enjoying {activity}. The best time to go is in {travel_month}.")

    To generate text from a vacation plan, pass in a dictionary-like thing
    of {prompt: answer, promp:answer):

        >>> ans = {"destination": "Bali", "activity": "surfing", "travel_month": "June", "duration_days": "7"}
        >>> plan.generate(ans)
        'Get ready for your dream vacation in Bali! You will spend 7 days enjoying surfing. The best time to go is in June.'
    """

    def __init__(self, words, text):
        """Create story with words and template text."""

        self.prompts = words
        self.template = text

    def generate(self, answers):
        """Substitute answers into text."""

        text = self.template

        for (key, val) in answers.items():
            text = text.replace("{" + key + "}", val)

        return text




plan = VacationPlan(["destination", "activity", "travel_month", "duration_days"],
                    "Get ready for your dream vacation in {destination}! You will spend {duration_days} days enjoying {activity}. The best time to go is in {travel_month}.")
