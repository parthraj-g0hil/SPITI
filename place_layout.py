"""
Shared layout: each stop has folder place-photos/day-NN/<place_id>/
Must stay in sync with PLACES in index.html (ids + day numbers).
"""
from __future__ import annotations

# (day, place_id) — tour order
PLACE_FOLDERS: list[tuple[int, str]] = [
    (1, "d1"),
    (2, "d2a"),
    (2, "d2b"),
    (3, "d3a"),
    (3, "d3b"),
    (3, "d3c"),
    (4, "d4a"),
    (4, "d4b"),
    (4, "d4c"),
    (4, "d4d"),
    (5, "d5a"),
    (5, "d5b"),
    (5, "d5c"),
    (6, "d6a"),
    (6, "d6b"),
    (7, "d7a"),
    (7, "d7b"),
    (7, "d7c"),
    (7, "d7d"),
    (8, "d8"),
    (9, "d9a"),
    (9, "d9b"),
    (10, "d10a"),
    (10, "d10b"),
    (10, "d10c"),
    (11, "d11a"),
    (11, "d11b"),
    (12, "d12"),
]


def day_dir_name(day: int) -> str:
    return f"day-{day:02d}"


def place_dir(project_root: str, day: int, place_id: str) -> str:
    import os

    return os.path.join(project_root, "place-photos", day_dir_name(day), place_id)
