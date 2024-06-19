import speech_recognition as sr
import pyttsx3

# Inicializar el motor de reconocimiento de voz y síntesis de voz
recognizer = sr.Recognizer()
engine = pyttsx3.init()

# Definir la función para que el asistente responda
def speak(text):
    engine.say(text)
    engine.runAndWait()

# Definir la función para escuchar al usuario
def listen():
    with sr.Microphone() as source:
        print("Escuchando...")
        recognizer.adjust_for_ambient_noise(source)
        audio = recognizer.listen(source)
        try:
            print("Reconociendo...")
            text = recognizer.recognize_google(audio, language='es-ES')
            return text.lower()
        except sr.UnknownValueError:
            print("No se pudo entender el audio")
            return ""
        except sr.RequestError as e:
            print("Error al solicitar resultados; {0}".format(e))
            return ""

# Función principal del asistente de voz
def main():
    speak("Hola, ¿en qué puedo ayudarte?")
    
    while True:
        command = listen()
        
        if "detener" in command:
            speak("Adiós")
            break
        elif "cómo estás" in command:
            speak("Estoy bien, gracias por preguntar.")
        elif "hora" in command:
            speak("No tengo reloj, pero puedo decirte que es hora de disfrutar el día.")
        else:
            speak("Lo siento, no entendí ese comando.")

if __name__ == "__main__":
    main()
