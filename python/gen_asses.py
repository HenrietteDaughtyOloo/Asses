class FabricChange:
    temperature_range = 20
    neutral_mood = 5        
    def __init__(self,temperature,mood):
        self.temperature = temperature
        self.mood = mood
    def design_change(self):
        design = ""
        if temperature >= temperature_range and mood >= neutral_mood:
            design = "bright and bold"
            return f'the design changes to {design}'
        elif temperature >= temperature_range and mood <= neutral_mood:
            design = "dull and light"
            return f'the design change it to a {design}' 
    def add(number1, number2):
        result = number1+number2
        print(result)