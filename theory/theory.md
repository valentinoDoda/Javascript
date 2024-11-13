# Untitled

### Δημιουργία Ημερομηνίας

1. **Τρέχουσα Ημερομηνία και Ώρα**

   ```jsx
   javascript
   Copy code
   const now = new Date();
   console.log(now);

   ```

2. **Δημιουργία Συγκεκριμένης Ημερομηνίας**

   ```jsx
   javascript
   Copy code
   const specificDate = new Date('2023-12-25');
   console.log(specificDate);

   ```

3. **Δημιουργία με Πλήρη Στοιχεία**

   ```jsx
   javascript
   Copy code
   const dateWithDetails = new Date(2023, 11, 25, 10, 30, 0); // Έτος, Μήνας (0=Ιανουάριος), Ημέρα, Ώρα, Λεπτά, Δευτερόλεπτα
   console.log(dateWithDetails);

   ```

### Μέθοδοι για Λήψη Πληροφοριών

1. **Έτος, Μήνας, Ημέρα**

   ```jsx
   javascript
   Copy code
   console.log(now.getFullYear());  // Έτος
   console.log(now.getMonth());     // Μήνας (0=Ιανουάριος)
   console.log(now.getDate());      // Ημέρα

   ```

2. **Ώρα, Λεπτά, Δευτερόλεπτα**

   ```jsx
   javascript
   Copy code
   console.log(now.getHours());     // Ώρα
   console.log(now.getMinutes());   // Λεπτά
   console.log(now.getSeconds());   // Δευτερόλεπτα

   ```

### Μορφοποίηση Ημερομηνίας

Για ευκολότερη μορφοποίηση μπορείς να χρησιμοποιήσεις την `toLocaleDateString()`:

```jsx
javascript
Copy code
console.log(now.toLocaleDateString('en-GB')); // Εμφανίζει σε μορφή ΗΗ/ΜΜ/ΕΕΕΕ
console.log(now.toLocaleDateString('el-GR')); // Μορφοποίηση για Ελληνικά

```

### Υπολογισμοί με Ημερομηνίες

Για υπολογισμούς, όπως προσθήκη ημερών, μπορείς να τροποποιήσεις άμεσα την ημερομηνία:

```jsx
javascript
Copy code
const futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 5); // Προσθήκη 5 ημερών
console.log(futureDate);

```
