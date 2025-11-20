"""
Калькулятор с базовыми математическими операциями.
Calculator with basic mathematical operations.
"""


def add(a, b):
    """Сложение двух чисел / Add two numbers."""
    return a + b


def subtract(a, b):
    """Вычитание / Subtract b from a."""
    return a - b


def multiply(a, b):
    """Умножение / Multiply two numbers."""
    return a * b


def divide(a, b):
    """Деление / Divide a by b."""
    if b == 0:
        raise ValueError("Деление на ноль невозможно / Division by zero is not allowed")
    return a / b


def calculate(operation, a, b):
    """
    Выполнить операцию над двумя числами.
    Perform an operation on two numbers.
    
    Args:
        operation: Операция (+, -, *, /)
        a: Первое число
        b: Второе число
    
    Returns:
        Результат операции
    """
    operations = {
        '+': add,
        '-': subtract,
        '*': multiply,
        '/': divide
    }
    
    if operation not in operations:
        raise ValueError(f"Неизвестная операция / Unknown operation: {operation}")
    
    return operations[operation](a, b)


if __name__ == "__main__":
    print("Калькулятор / Calculator")
    print("Доступные операции / Available operations: +, -, *, /")
    print("Для выхода введите 'выход' или 'quit' / Type 'выход' or 'quit' to exit")
    print()
    
    while True:
        try:
            user_input = input("Введите выражение (например, 5 + 3) / Enter expression (e.g., 5 + 3): ").strip()
            
            if user_input.lower() in ['выход', 'quit', 'exit']:
                print("До свидания! / Goodbye!")
                break
            
            # Разбор входной строки / Parse input string
            parts = user_input.split()
            
            if len(parts) != 3:
                print("Ошибка: Неправильный формат. Используйте: число операция число")
                print("Error: Wrong format. Use: number operation number")
                continue
            
            num1 = float(parts[0])
            operation = parts[1]
            num2 = float(parts[2])
            
            result = calculate(operation, num1, num2)
            print(f"Результат / Result: {result}")
            print()
            
        except ValueError as e:
            print(f"Ошибка / Error: {e}")
            print()
        except Exception as e:
            print(f"Произошла ошибка / An error occurred: {e}")
            print()
