import React, { useState } from "react";
import "./GenderChecker.css";

const GenderChecker: React.FC = () => {
  const [name, setName] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const checkGender = async () => {
    setError("");
    setResult(null);

    if (!name.trim()) {
      setError("Введите имя.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`https://api.genderapi.io/api/?name=${name}`);
      const data = await res.json();
      setResult(data);
    } catch (e) {
      setError("Ошибка при запросе.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="gender-checker">
      <h2>Узнать пол по имени</h2>
      <input
        type="text"
        value={name}
        placeholder="Введите имя"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={checkGender}>Проверить</button>

      {loading && <p>Загрузка...</p>}
      {error && <p className="error">{error}</p>}

      {result && (
        <div className="result">
          <p><b>Имя:</b> {result.name}</p>
          <p><b>Пол:</b> {result.gender === "male" ? "Мужской" : "Женский"}</p>
          <p><b>Страна:</b> {result.country}</p>
          <p><b>Вероятность:</b> {result.probability}%</p>
          <p><b>Осталось запросов:</b> {result.remaining_credits}</p>
        </div>
      )}
    </div>
  );
};

export default GenderChecker;