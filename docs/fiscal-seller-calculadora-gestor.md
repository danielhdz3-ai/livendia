# Consulta fiscal vendedor — motor interno y Excel

## Qué hay en el repo

- **Motor:** `src/lib/fiscal-seller-calculator.ts` + parámetros en `src/lib/fiscal-seller-tax-config.ts`.
- **Memoria HTML/PDF:** `src/lib/fiscal-seller-memoria-render.ts` (panel y ejemplo público).
- **Ejemplo landing:** fixture ficticio en `src/lib/fiscal-seller-example-fixture.ts`.
- **Tests:** `npm run test:fiscal-calculator` (`scripts/run-fiscal-seller-calculator-tests.ts`).

Referencia en repo: **`docs/calculadora_fiscal_vendedor.xlsx`** (copia del archivo de despacho).

## Cómo validar con el Excel del despacho

1. Copiar la hoja a `docs/calculadora_fiscal_vendedor.xlsx` (gitignored si contiene datos sensibles) o dejar la ruta en `.env.local` solo en máquinas del gestor.
2. Tomar **exactamente** las mismas celdas de entrada que usa el Excel (precios, fechas, % suelo, titulares, gastos).
3. Volcar esos valores en `FISCAL_SELLER_EXCEL_FIXTURE` en `fiscal-seller-calculator.ts`.
4. Ejecutar `npm run test:fiscal-calculator`:
   - debe pasar el **baseline de regresión** (salida actual del motor con ese fixture);
   - si el Excel difiere, aparecerá **PENDIENTE Excel** hasta actualizar fórmulas en el motor o corregir el fixture.
5. Cuando coincidan al céntimo, igualar `FISCAL_SELLER_PRODUCT_SPEC_TARGET` al motor y exigir tolerancia 0,01 € en el test.

## Caso de prueba (hoja Datos / Resumen)

Con el fixture `FISCAL_SELLER_EXCEL_FIXTURE` el motor coincide con el Excel (15/12/2026, 320.000 € venta, 17 años, Barcelona):

| Concepto | Excel / motor |
|----------|----------------|
| Plusvalía | 1.320 € |
| IRPF total | 25.171,40 € |
| Líquido neto | 200.008,60 € |

## Parámetros pendientes de verificación

- Coeficientes IIVTNU (pre/post 1-dic-2026): `verification: pending_boe` en `fiscal-seller-tax-config.ts`.
- Tipo plusvalía Barcelona: orientativo 30 % — confirmar ordenanza.
- **No publicar** tablas de coeficientes en la web hasta `verified`.

## Canales

- **Público:** landing + `/servicios/consulta-fiscal-vendedor/ejemplo-memoria` (datos ficticios, sin calculadora).
- **Interno:** panel admin fiscal (`src/app/admin/fiscal-actions.ts`).