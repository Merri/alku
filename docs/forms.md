# Forms

## Fieldset and legend

These elements have been reset. This encourages using fieldset and legend for grouping inputs instead of headings and
divs.

```html
<fieldset>
	<legend data-text="heading2">Doge</legend>
	<label>
		<input type="radio" name="good" value="1" />
		Is good, wow
	</label>
	<label>
		<input type="radio" name="good" value="0" />
		No good, despair
	</label>
</fieldset>
```

## Label

Labels have been upgraded to inline flex containers by default. Input elements and text label are separated by a gap
value instead of a single space character.

```html
<label>
	<input type="checkbox" name="star" value="yes" />
	Give this project a star?
</label>
```

Checkboxes and radio buttons are placed alongside text. Other inputs, select, and textarea will take as much horizontal
space as is available and thus will reserve their own row.

You can even add description fields below:

```html
<label>
	Username:
	<input aria-describedby="username-desc" />
	<span id="username-desc" aria-hidden="true" data-text-color="state">Your username or email</span>
</label>
```

The description fields can match `aria-invalid` state of the field.

```html
<!-- field appears red: -->
<label>
	Username:
	<input aria-invalid="true" aria-describedby="username-desc" />
	<span id="username-desc" aria-hidden="true" data-text-color="state">Please re-check your username</span>
</label>

<!-- field appears green: -->
<label>
	Username:
	<input aria-invalid="false" aria-describedby="username-desc" />
	<span id="username-desc" aria-hidden="true" data-text-color="state">Username is correct</span>
</label>
```
