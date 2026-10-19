# Visualisator Algoritma Pencarian — Logika Pemrograman
### (Binary Search, Linear Search, & Visual Duel Comparison)

Aplikasi web interaktif pembelajaran algoritma pencarian yang dirancang khusus untuk mata kuliah **Logika & Algoritma Pemrograman** (Teknik Informatika). Aplikasi ini menyediakan modul **Binary Search**, **Linear Search**, dan **Mode Duel / Komparasi Visual Balapan Head-to-Head**, lengkap dengan animasi fluid, papan skor perbandingan, dan **Tabel Tracing (Dry-Run Table) langkah demi langkah yang detail**.

---

## 🌟 3 Menu Pilihan Utama

Aplikasi dilengkapi menu tab di bagian atas untuk beralih mode dengan mudah:

1. **⚡ Binary Search (Bagi Dua)**:
   - Kompleksitas: $O(\log n)$ waktu | $O(1)$ ruang.
   - **Syarat Mutlak:** Data wajib terurut (*sorted*).
   - Animasi: 3 pointer (`LOW`, `MID`, `HIGH`), braket rentang aktif, dan eliminasi $50\%$ data di setiap langkah.
2. **🔎 Linear Search (Berurutan / Sekuensial)**:
   - Kompleksitas: $O(n)$ waktu | $O(1)$ ruang.
   - **Karakteristik:** Bekerja pada data acak/tidak terurut (*unsorted*) maupun terurut.
   - Animasi: Pointer pemindai tunggal (`INDEKS i`) yang melangkah sekuensial dari kiri ke kanan dengan efek pemindai *radar scan*.
3. **⚔️ Komparasi Visual (Duel Arena Balapan Head-to-Head)**:
   - **Visual Racetrack Simultan**: Menjalankan Linear Search dan Binary Search pada dataset dan target yang **persis sama secara bersamaan**.
   - **Papan Skor Live**: Memperlihatkan perbandingan jumlah langkah/komparasi yang dilakukan kedua algoritma secara langsung.
   - **Grafik Rasio Efisiensi**: Mengukur persentase penghematan komputasi (misal: *"Binary Search 62.5% lebih hemat langkah dibandingkan Linear Search"*).
   - **Tabel Komparasi Head-to-Head**: Menampilkan tahap demi tahap apa yang dilakukan Linear Search vs Binary Search pada setiap detik waktu.

---

## 🎬 Fitur Animasi & Visualisasi Unggulan

- **Dual Racetrack Track**:
  - Jalur 1 (Oranye): Penelusuran sekuensial Linear Search.
  - Jalur 2 (Cyan): Pemangkasan eksponensial Binary Search.
- **Efek Khusus & Audio FX**:
  - Partikel *Confetti celebration* saat pemenang balapan menemukan target.
  - Audio sintetis dinamis (Web Audio API) yang menandai setiap langkah, penemuan, dan kegagalan.
  - Tombol beralih mode Gelap (*Dark*) dan Terang (*Light*).

---

## 📋 Tabel Tracing Lengkap (Dry-Run Table)

- **Tabel Mandiri**: Tabel tracing 7 kolom untuk Binary Search dan 6 kolom untuk Linear Search.
- **Tabel Duel Komparasi**: Kolom tahap, perbandingan Linear Search, perbandingan Binary Search, serta keunggulan komparatif di setiap langkah.
- **Interactive Scrubbing**: Klik baris manapun pada tabel untuk langsung memindahkan animasi ke tahap tersebut.
- **Ekspor & Salin**:
  - Tombol **📋 Salin**: Menyalin data tabel ke clipboard format teks terstruktur.
  - Tombol **📥 CSV**: Mengunduh berkas `.csv` untuk laporan tugas mahasiswa.

---

## 💻 Sinkronisasi Kode Multi-Bahasa

Penyorotan baris kode bergerak otomatis mengikuti tahap eksekusi:
- **Pseudocode** (Notasi Algoritmik Bahasa Indonesia)
- **Python**
- **C++**
- **Java**

---

## 🚀 Cara Menjalankan

Aplikasi web dapat langsung diakses pada server lokal:
- 🌐 **URL:** [http://localhost:8080](http://localhost:8080)
- 📁 **File:** [`index.html`](file:///c:/Data/Pengajaran/Ganjil%202026/Logika%20Pemrograman/index.html)

### ⌨️ Pintasan Keyboard:
- `Spasi`: Putar / Jeda otomatis
- `Panah Kanan (→)`: Maju 1 langkah
- `Panah Kiri (←)`: Mundur 1 langkah
- `R`: Reset ke langkah awal
