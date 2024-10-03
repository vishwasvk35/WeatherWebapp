const weatherIcons = [
    // Group 2xx: Thunderstorm
    { code: 200, description: "thunderstorm with light rain", icon: "11d" },
    { code: 201, description: "thunderstorm with rain", icon: "11d" },
    { code: 202, description: "thunderstorm with heavy rain", icon: "11d" },
    { code: 210, description: "light thunderstorm", icon: "11d" },
    { code: 211, description: "thunderstorm", icon: "11d" },
    { code: 212, description: "heavy thunderstorm", icon: "11d" },
    { code: 221, description: "ragged thunderstorm", icon: "11d" },
    { code: 230, description: "thunderstorm with light drizzle", icon: "11d" },
    { code: 231, description: "thunderstorm with drizzle", icon: "11d" },
    { code: 232, description: "thunderstorm with heavy drizzle", icon: "11d" },

    // Group 3xx: Drizzle
    { code: 300, description: "light intensity drizzle", icon: "09d" },
    { code: 301, description: "drizzle", icon: "09d" },
    { code: 302, description: "heavy intensity drizzle", icon: "09d" },
    { code: 310, description: "light intensity drizzle rain", icon: "09d" },
    { code: 311, description: "drizzle rain", icon: "09d" },
    { code: 312, description: "heavy intensity drizzle rain", icon: "09d" },
    { code: 313, description: "shower rain and drizzle", icon: "09d" },
    { code: 314, description: "heavy shower rain and drizzle", icon: "09d" },
    { code: 321, description: "shower drizzle", icon: "09d" },

    // Group 5xx: Rain
    { code: 500, description: "light rain", icon: "10d" },
    { code: 501, description: "moderate rain", icon: "10d" },
    { code: 502, description: "heavy intensity rain", icon: "10d" },
    { code: 503, description: "very heavy rain", icon: "10d" },
    { code: 504, description: "extreme rain", icon: "10d" },
    { code: 511, description: "freezing rain", icon: "13d" },
    { code: 520, description: "light intensity shower rain", icon: "09d" },
    { code: 521, description: "shower rain", icon: "09d" },
    { code: 522, description: "heavy intensity shower rain", icon: "09d" },
    { code: 531, description: "ragged shower rain", icon: "09d" },

    // Group 6xx: Snow
    { code: 600, description: "light snow", icon: "13d" },
    { code: 601, description: "snow", icon: "13d" },
    { code: 602, description: "heavy snow", icon: "13d" },
    { code: 611, description: "sleet", icon: "13d" },
    { code: 612, description: "light shower sleet", icon: "13d" },
    { code: 613, description: "shower sleet", icon: "13d" },
    { code: 615, description: "light rain and snow", icon: "13d" },
    { code: 616, description: "rain and snow", icon: "13d" },
    { code: 620, description: "light shower snow", icon: "13d" },
    { code: 621, description: "shower snow", icon: "13d" },
    { code: 622, description: "heavy shower snow", icon: "13d" },

    // Group 7xx: Atmosphere
    { code: 701, description: "mist", icon: "50d" },
    { code: 711, description: "smoke", icon: "50d" },
    { code: 721, description: "haze", icon: "50d" },
    { code: 731, description: "sand/ dust whirls", icon: "50d" },
    { code: 741, description: "fog", icon: "50d" },
    { code: 751, description: "sand", icon: "50d" },
    { code: 761, description: "dust", icon: "50d" },
    { code: 762, description: "volcanic ash", icon: "50d" },
    { code: 771, description: "squalls", icon: "50d" },
    { code: 781, description: "tornado", icon: "50d" },

    // Group 800: Clear
    { code: 800, description: "clear sky", icon: "01d" }, // Day icon
    { code: 800, description: "clear sky", icon: "01n" }, // Night icon

    // Group 80x: Clouds
    { code: 801, description: "few clouds: 11-25%", icon: "02d" }, // Day icon
    { code: 801, description: "few clouds: 11-25%", icon: "02n" }, // Night icon
    { code: 802, description: "scattered clouds: 25-50%", icon: "03d" },
    { code: 803, description: "broken clouds: 51-84%", icon: "04d" },
    { code: 804, description: "overcast clouds: 85-100%", icon: "04d" }
];

export default weatherIcons;